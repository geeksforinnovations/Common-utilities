'use strict';

// const dbModels = require('./models/index')
const serverless  = require('serverless-http');
const AWS         = require('aws-sdk');
// const dbModels = require('../../models')
// const helpers = require("../../utils/helpers");


var ses = new AWS.SES();

module.exports.hello = async (event, context, callback) => {
  // const x = await dbModels.Puja
  //   .findAll();
  // callback(null, x)

  const params = {
    Destination: {
      ToAddresses: [ "manjunath.cycle@gmail.com" ],
    },
    Message: {
      Subject: {
        Data: 'test subject',//data.subject,
        Charset: 'UTF-8'
      },
      Body: {
        Text: {
          Data: 'Test', // data.text,
          Charset: "UTF-8"
        }
      }
    },
    Source: "manikumarkv@gmail.com"
  };

  const result = await ses.sendEmail(params) 
    console.log('result', result)
    return 'hello'
};
