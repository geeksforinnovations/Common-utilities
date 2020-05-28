'use strict';
var validator = require('validator');
var constants = require('../utils/constants');
module.exports = (sequelize, DataTypes) => {
    var Pujari = sequelize.define('Pujari', {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            validate: {
                notNull: {
                    msg: "id can't be empty."
                }
            }
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "firstName can't be empty."
                }
            }
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "lastName can't be empty."
                }
            }
        },

        middleName: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        contactNo: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "contactNo can't be empty."
                }
            }
        },

        address1: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "address1 can't be empty."
                }
            }
        },

        address2: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        type: {
            type: DataTypes.STRING,
            allowNull: true,
        },

        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "city can't be empty."
                }
            }
        },

        country: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "country can't be empty."
                }
            }
        },

        timeZone: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM,
            values: [constants.ACCEPTED, constants.REQUESTED, constants.DENIED, constants.INACTIVE],
            allowNull: false,
            defaultValue: constants.REQUESTED,
            validate: {
                notNull: {
                    msg: "status can't be null."
                },
                customValidator(value) {
                    var types = [constants.ACCEPTED, constants.REQUESTED, constants.DENIED, constants.INACTIVE]
                    if (!types.includes(value)) {
                        throw new Error("Enter valid value for status.");
                    }
                }
            }
        },
        imageId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rating: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },
        experience: {
            type: DataTypes.NUMBER,
            allowNull: true,
        },

    }, { freezeTableName: true });
    Pujari.associate = function (models) {
        Pujari.hasMany(models.PujariLanguages);
    };
    return Pujari;
};