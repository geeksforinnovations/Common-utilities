'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    var Pujari_reviews = sequelize.define('Pujari_reviews', {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        reviewDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
            validate: {
                notNull: {
                    msg: "reviewDate can't be empty."
                }
            }
        },

        rating: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "rating can't be empty."
                }
            }
        },

        review: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "review can't be empty."
                }
            }
        },

        userId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "userId can't be empty."
                }
            }
        },

        pujariId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "pujariId can't be empty."
                }
            }
        },

        pujaId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "pujaId can't be empty."
                }
            }
        },

        visibleFlag: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "visibleFlag can't be empty."
                }
            }
        },

        bookingId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "bookingId can't be empty."
                }
            }
        },
    }, { freezeTableName: true});
    Pujari_reviews.associate = function (models) {
        // associations can be defined here
        // Pujari.belongsTo(models.Pujari);
    };
    return Pujari_reviews;
};