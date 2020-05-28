const service = require('./booking.service')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {

    try {
        const data = await service.getAllBookings(event);
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};