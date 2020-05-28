
const service = require('./pujariService')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {

    try {
        const data = await service.getAllPujaris();
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};