const emailService = require('./mail.service')
const helpers = require("../../utils/helpers");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (event, context, callback) => {
  try {
    const emailBody = JSON.parse(event.body);
      const msg = {
        to: emailBody.to,
        from: emailBody.from,
        cc: emailBody.cc,
        bcc: emailBody.bcc,
        templateId: emailBody.templateId,
        dynamic_template_data: {
          parm1: emailBody.data.parm1,
          parm2: emailBody.data.parm2,
          parm3: emailBody.data.parm3,
          parm4: emailBody.data.parm4,
          parm5: emailBody.data.parm5,
          parm6: emailBody.data.parm6,
          parm7: emailBody.data.parm7,
          parm8: emailBody.data.parm8,
        }
      }
      return await sgMail.send(msg);;

  } catch (error) {
    return helpers.failure({ message: error.response.body });
  }
};