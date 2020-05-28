const service = require('./booking.service')
const helpers = require("../../utils/helpers");
const emailService = require('../email/mail.service')

module.exports = async (event, context, callback) => {
  try {
    const booking = JSON.parse(event.body);;
    const data = await service.updateBooking(booking);
    emailService.sendUpdateBookingEmail(booking).then(reap=> {})
    return helpers.success({ data: data });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};