
const service = require('./booking.service')
const helpers = require("../../utils/helpers");
const emailService = require('../email/mail.service')

module.exports = async (event, context, callback) => {
    try {
        const data = await service.cancelBookng(event.pathParameters.id);
        emailService.sendCancelBookingEmail({}).then(resp=>{})

        return helpers.success({ data: data });

    } catch (error) {
        return helpers.failure({ message: error.message });
    }

};