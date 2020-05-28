'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
    var PujariLanguages = sequelize.define('PujariLanguages', {
        id: {
            type: DataTypes.NUMBER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        languageId: {
            type: DataTypes.NUMBER,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "languageId can't be empty."
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

    }, { freezeTableName: true });
    PujariLanguages.associate = function (models) {
        // associations can be defined here
        PujariLanguages.belongsTo(models.Languages);
    };
    return PujariLanguages;
};