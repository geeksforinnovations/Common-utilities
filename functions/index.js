'use strict';

const createCustomer = require('./transactions/createCustomer')
const payment = require('./transactions/payment')
const generateOTP = require('./otp/create')
const verifyOtp = require('./otp/verify')
const sendEmails = require('./email/sendEmails')
const sendEmailsByTemplate = require('./email/sendEmailsByTemplate')


module.exports = {
    createCustomer: createCustomer,
    payment: payment,
    generateOTP: generateOTP,
    verifyOtp: verifyOtp,
    sendEmails: sendEmails,
    sendEmailsByTemplate:sendEmailsByTemplate
}
