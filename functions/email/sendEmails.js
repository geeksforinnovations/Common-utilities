const emailService = require('./mail.service')
const helpers = require("../../utils/helpers");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (event, context, callback) => {
  try {
    const emailBody = JSON.parse(event.body);

   
    if (emailBody.type == "poojariConfirmed") {
      const msg = {
        to: emailBody.to,
        from: emailBody.from,
        cc: emailBody.cc,
        bcc: emailBody.bcc,
        templateId: 'd-3f73e440a43348dcab62c2bd10639ee1',
        dynamic_template_data: {
          name: emailBody.name,
          orderId: emailBody.orderId,
          poojariName: emailBody.poojariName,
        }
      }
      return await sgMail.send(msg);
    } else if (emailBody.type == "poojariNotConfirmed") {
      const msg = {
        to: emailBody.to,
        from: emailBody.from,
        cc: emailBody.cc,
        bcc: emailBody.bcc,
        templateId: 'd-654506898bc64b0898db38909700bb0c',
        dynamic_template_data: {
          name: emailBody.name,
          orderId: emailBody.orderId,
        },
      }
      return await sgMail.send(msg);;
    } else {
      const msg = [{
        to: emailBody.to,
        from: emailBody.from,
        cc: emailBody.cc,
        bcc: emailBody.bcc,
        templateId: 'd-3d362feadf224179807b3b2298957106',
        dynamic_template_data: {
          name: emailBody.name,
          orderId: emailBody.orderId,
        },
      },
      {
        to: emailBody.admin,
        from: emailBody.from,
        cc: emailBody.cc,
        bcc: emailBody.poojariEmails,
        templateId: 'd-0fcf2cbbf1754aaf84d24bb9bb3ae369',
        dynamic_template_data: {
          orderId: emailBody.orderId,
        },
      },
      ];
      return await sgMail.send(msg);;
    }

    // {
    //   "to": "aksanudeep@gmail.com",
    //   "admin": "aksanudeep@gmail.com",
    //   "from": "geeks4innovations@gmail.com",
    //   "cc" : "manikumarkv@gmail.com",
    //   "bcc" : "vinay.ananthu@gmail.com",
    //   "name": "AKs Ayyagari",
    //   "poojariName":"sastry",
    //   "poojariEmails" : [ "krish@intelsavvy.com", "krishayyagari4@gmail.com"],
    //   "orderId": 12345622,
    //   "type": "poojariConfirmed"
    // }
  } catch (error) {
    return helpers.failure({ message: error.response.body });
  }

};