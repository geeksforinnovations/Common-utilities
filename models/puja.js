'use strict';
var validator = require('validator');
var pujaLanguages = require('./pujaLanguages');
var constants = require('../utils/constants');
module.exports = (sequelize, DataTypes) => {
  var Puja = sequelize.define('Pujas', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Name can't be empty."
        },
        customValidator(value) {
          if (value.trim().length === 0) {
            throw new Error("Name can't be empty");
          }
        }
      }
    },
    description: DataTypes.STRING,
    about: DataTypes.STRING,
    timeInHrs: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: 'Please enter valid value for time in hrs.'
        },
        notNull: {
          msg: "TimeInHrs can't be empty."
        }
      }
    },
    cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: {
          msg: 'Please enter valid value for cost.'
        },
        notNull: {
          msg: "Cost can't be empty test."
        }
      }
    },
    requiredThings: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Required things can't be null."
        }
      }
    },
    type: {
      type: DataTypes.ENUM,
      values: [constants.OFFLINE, constants.ONLINE, constants.BOTH],
      allowNull: false,
      validate: {
        notNull: {
          msg: "Type can't be null."
        },
        customValidator(value) {
          var types = [constants.OFFLINE, constants.ONLINE, constants.BOTH]
          if (!types.includes(value)) {
            throw new Error("Enter valid value for type.");
          }
        }
      }
    },
    imageId: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Image can't be empty."
        },
        customValidator(value) {
          if (value.trim().length === 0) {
            throw new Error("Image can't be empty");
          }
        }
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: [constants.ACTIVE, constants.INACTIVE],
      allowNull: false,
      defaultValue: 'active',
      validate: {
        notNull: {
          msg: "Type can't be null."
        },
        customValidator(value) {
          var types = [constants.ACTIVE, constants.INACTIVE]
          if (!types.includes(value)) {
            throw new Error("Enter valid value for status.");
          }
        }
      }
    },
  }, {
  });
  Puja.associate = function (models) {
    Puja.hasMany(models.PujaLanguages);
    // Puja.hasMany(models.Booking);
  };
  return Puja;
};
