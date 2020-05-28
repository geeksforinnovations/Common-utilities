
const service = require('./booking_pendingsService')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {

    try {
        const data = await service.getAllBooking_Pendings(event);
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};