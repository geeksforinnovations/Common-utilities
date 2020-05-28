
const service = require('./pujariService')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {

    try {
        const pujariId = event.pathParameters.id;
        const data = await service.getPujari(pujariId);
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};