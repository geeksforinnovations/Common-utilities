const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const otpService = require('./otp.service')
module.exports = async (event, context, callback) => {
    try {
        const phoneNumber = event.pathParameters.number;
        // const verificationRequest = await twilio.verify.services(process.env.VERIFICATION_SID)
        //     .verifications
        //     .create({ to: phoneNumber, channel: 'sms' });

        // console.log('ver code check', verificationRequest)
        const verificationRequest = await otpService.createOtp(phoneNumber)

        return helpers.success({ data: verificationRequest });
    } catch (error) {
        return helpers.failure({ message: error });
    }
};