const helpers = require("../../utils/helpers");
const appSettingsService = require('./appSettings.service')

module.exports = async (event, context, callback) => {
    try {
        const isDeleted = await appSettingsService.deleteSetting(event.pathParameters.id)
       
        return helpers.success({ data: isDeleted });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};