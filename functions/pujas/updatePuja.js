const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const pujaService = require('./pujas.service')

module.exports = async (event, context, callback) => {
    try {
        const puja = JSON.parse(event.body);
        const updateddPuja = await pujaService.updatePuja(puja)
        return helpers.success({ data: updateddPuja });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};