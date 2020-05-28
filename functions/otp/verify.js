const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const otpService = require('./otp.service')
module.exports = async (event, context, callback) => {
    try {
        const otp = JSON.parse(event.body);;
        // const verificationResult = await twilio.verify.services(process.env.VERIFICATION_SID)
        //     .verificationChecks
        //     .create({ code: otp.code, to: otp.phoneNumber });
        const verificationResult = await otpService.verifyOTP(otp.phoneNumber, otp.code)
        console.log('ver code', verificationResult)

        return helpers.success({ data: verificationResult });
    } catch (error) {
        return helpers.failure({ message: error });
    }
};