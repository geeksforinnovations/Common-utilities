'use strict';
const puja = require('./puja')
var validator = require('validator');
var constants = require('../utils/constants');
module.exports = (Sequelize, DataTypes) => {
  const Booking_Pendings = Sequelize.define('Booking_pendings', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    pujariId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "pujariId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for pujariId. should be a number"
        },
        min: 1
      }
    },

    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "bookingId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for bookingId. should be a number"
        },
        min: 1
      }
    },

    status: {
      type: DataTypes.ENUM,
      values: [constants.PENDING, constants.ACCEPTED, constants.DENIED],
      allowNull: false,
      validate: {
        notNull: {
          msg: "status can't be null."
        },
        customValidator(value) {
          var types = [constants.PENDING, constants.ACCEPTED, constants.DENIED]
          if (!types.includes(value)) {
            throw new Error("Enter valid value for status.");
          }
        }
      }
    },

  }, { freezeTableName: true });
  Booking_Pendings.associate = function (models) {
    // associations can be defined here
    // puja.belongsTo(Booking)
    // Booking_Pendings.belongsTo(models.Pujas, { as: 'puja' });
  };
  return Booking_Pendings;
};