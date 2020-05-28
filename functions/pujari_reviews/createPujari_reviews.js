const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const service = require('./pujari_reviewService')


module.exports = async (event, context, callback) => {
  try {
    const pujari_review = JSON.parse(event.body);
    // const otpResult = await otpService.verifyOTP(booking.phoneNumber, booking.otpCode);
    // if (helpers.isUndefined(otpResult)) {
    //     console.error('unable to send OTP')
    //     throw new Error("otp failed")
    // }
    console.log("create pujari_review started");
    const data = await service.createPujari_Review(pujari_review);
  //  const email = await emailService.sendBookingConfirmation(booking)
    return helpers.success({ data: data });
} catch (error) {
    return helpers.failure({ message: error.message });
}
};
