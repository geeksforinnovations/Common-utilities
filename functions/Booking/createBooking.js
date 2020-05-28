
const service = require('./booking.service')
const emailService = require('../email/mail.service')
const helpers = require("../../utils/helpers");
const otpService = require('../otp/otp.service')

module.exports = async (event, context, callback) => {
    try {
        const booking = JSON.parse(event.body);
        // const otpResult = await otpService.verifyOTP(booking.phoneNumber, booking.otpCode);
        // if (helpers.isUndefined(otpResult)) {
        //     console.error('unable to send OTP')
        //     throw new Error("otp failed")
        // }
        console.log("create booking started")
        const data = await service.createBooking(booking);
       const email = await emailService.sendBookingConfirmation(booking)
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};