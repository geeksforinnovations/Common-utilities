const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const service = require('./pujariService')

module.exports = async (event, context, callback) => {

    try {
        console.log("update pujari status started");
        const pujari = JSON.parse(event.body);
        console.log(pujari);
        const pujariId = event.pathParameters.id;
        const data = await service.updatePujari(pujariId,pujari);
        return helpers.success({ data: data });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};