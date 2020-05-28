const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const service = require('./booking_pendingsService')


module.exports = async (event, context, callback) => {
  try {
    const booking_pendings = JSON.parse(event.body);
    console.log("create booking_pendings started");
    const data = await service.createBooking_pendings(booking_pendings);
    //  const email = await emailService.sendBookingConfirmation(booking)
    return helpers.success({ data: data });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};
