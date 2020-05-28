
const service = require('./pujari_reviewService')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {

    try {
        const data = await service.getAllPujari_reviews();
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};