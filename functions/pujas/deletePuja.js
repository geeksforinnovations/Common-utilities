const helpers = require("../../utils/helpers");
const pujaService = require('./pujas.service')

module.exports = async (event, context, callback) => {
    try {
        const isDeleted =  await pujaService.deletePuja(event.pathParameters.id ) 
        return helpers.success({ data: isDeleted });
    } catch (error) {
        return helpers.failure({message: error.message});
    }
};