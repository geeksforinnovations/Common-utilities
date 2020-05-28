const service = require('./booking.service')

const helpers = require("../../utils/helpers");
module.exports = async (event, context, callback) => {

  try {
    const phoneNumber = event.pathParameters.id;
    const data = await service.getBookingsByPhoneNumber(phoneNumber);
    return helpers.success({ data: data });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }

};
