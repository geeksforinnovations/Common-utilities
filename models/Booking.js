'use strict';
const puja = require('./puja')
var validator = require('validator');
var constants = require('../utils/constants')

module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      validate: {
        notNull: {
          msg: "date can't be empty."
        }
      }
    },

    status: {
      type: DataTypes.ENUM,
      values: [constants.ACTIVE, constants.COMPLETED, constants.CANCELLED]
    },

    languageId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Language id can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for language id. language Id should be a number"
        },
        min: 1
      }
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "userId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for userId. should be a number"
        },
        min: 1
      }
    },

    pujaStartDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Please enter valid value for Booking date.'
        },
        notNull: {
          msg: "pujaStartDate can't be empty."
        }
      }
    },

    pujaEndDate: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        isDate: {
          msg: 'Please enter valid value for Booking date.'
        },
        notNull: {
          msg: "pujaEndDate can't be empty."
        }
      }
    },

    pujariId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null
      // validate: {
      //   notNull: {
      //     msg: "pujariId can't be null or empty."
      //   },
      //   isInt: {
      //     msg: "Enter valid value for pujariId. should be a number"
      //   },
      //   min: 1
      // }
    },

    pujaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "pujaId can't be null or empty."
        },
        isInt: {
          msg: "Enter valid value for pujaId. should be a number"
        },
        min: 1
      }
    },

    pujaType: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: [constants.OFFLINE, constants.ONLINE],
      validate: {
        notNull: {
          msg: "Puja type can't be null."
        },
        notEmpty:
        {
          msg: "Puja type can't be empty."
        }
      }
    },

    customerName: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notNull: {
      //     msg: "pujariType can't be empty."
      //   }
      // }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notNull: {
      //     msg: "pujariType can't be empty."
      //   }
      // }
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      // validate: {
      //   notNull: {
      //     msg: "pujariType can't be empty."
      //   }
      // }
    },
  }, { freezeTableName: true });
  Booking.associate = function (models) {
    // associations can be defined here
    // puja.belongsTo(Booking)
    Booking.belongsTo(models.Pujas, { as: 'puja' });
  };
  return Booking;
};
