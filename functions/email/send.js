const emailService = require('./mail.service')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const resp = await emailService({})
    return helpers.success({ data: resp });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }

};
