'use strict';

module.exports = (sequelize, DataTypes) => {
    const AppSettings = sequelize.define('AppSettings', {
        key: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: "Key can't be empty."
                },
        customValidator(value) {
          if (value.trim().length === 0) {
            throw new Error("Key can't be empty");
          }
        }
            }
        },
        value: {
            type: DataTypes.TEXT,
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: "Type can't be empty."
                }
            },
            customValidator(value) {
              if (value.trim().length === 0) {
                throw new Error("Type can't be empty");
              }
            }
        },
        displayName: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                notNull: {
                    msg: "Display name can't be empty."
                }
            },
            customValidator(value) {
              if (value.trim().length === 0) {
                throw new Error("Display name can't be empty");
              }
            }
        },

    }, { freezeTableName: true });
    AppSettings.associate = function (models) {
        // associations can be defined here
    };
    return AppSettings;
};