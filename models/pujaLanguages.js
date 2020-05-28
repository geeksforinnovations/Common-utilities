'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  var PujaLanguage = sequelize.define('PujaLanguages', {
    pujaid: {
      type: DataTypes.NUMBER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "puja id can't be empty."
        }
      }
    },
    languageId: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Language id can't be empty."
          }
        }
      }
    
  }, 
  {freezeTableName: true},
    );
  PujaLanguage.associate = function (models) {
    // associations can be defined here
   PujaLanguage.belongsTo(models.Languages);
  };
  return PujaLanguage;
};