

const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

const helpers = require('../../utils/helpers')

module.exports.createOtp = async function (phoneNumber) {
    try {
        if (helpers.isNullOrEmpty(phoneNumber)) {
            console.error("ph number is empty");
            throw new Error("ph number is empty")
        }
        const verificationRequest = await twilio.verify.services(process.env.VERIFICATION_SID)
            .verifications
            .create({ to: phoneNumber, channel: 'sms' });
        console.log('ver code check', verificationRequest)
        return verificationRequest;
    } catch (error) {
        console.error("unable to create OTP because of ", error)
        throw error;

    }
}

module.exports.verifyOTP = async function (phoneNumber, otpCode) {
    try {
        if (helpers.isNullOrEmpty(phoneNumber) || helpers.isNullOrEmpty(otpCode)) {
            console.error('Phnumber or code can not be empty')
            throw new Error("otp details are empty")
        }
        const verificationResult = await twilio.verify.services(process.env.VERIFICATION_SID)
            .verificationChecks
            .create({ code: otpCode, to: phoneNumber });
        console.log('ver code', verificationResult)
        return verificationResult;
    } catch (error) {
        console.error("unable to verify OTP because of ", error)
        throw error;

    }
}