'use strict';
var validator = require('validator');

module.exports = (sequelize, DataTypes) => {
  const FAQ = sequelize.define('FAQ', {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Question can't be empty."
        },
        customValidator(value) {
          if (value.trim().length === 0) {
            throw new Error("Question can't be empty");
          }
        }
      }
    },
    answer: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Answer can't be empty."
        }
      }
    },
    
  }, {freezeTableName: true});
  FAQ.associate = function (models) {
    // associations can be defined here
  };
  return FAQ;
};