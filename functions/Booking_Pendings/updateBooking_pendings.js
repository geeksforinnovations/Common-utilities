const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const service = require('./booking_pendingsService')

module.exports = async (event, context, callback) => {

    try {
        console.log("update booking_pending started");
        const booking_pendings = JSON.parse(event.body);
        console.log(booking_pendings);
        const id = event.pathParameters.id;
        const data = await service.updateBooking_Pendings(id,booking_pendings);
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};