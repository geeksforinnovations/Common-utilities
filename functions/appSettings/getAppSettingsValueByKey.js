const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const appSettingsService = require('./appSettings.service')

module.exports = async (event, context, callback) => {
  try {
    const appSettings = await appSettingsService.getByKey(event.pathParameters.id)

    return helpers.success({ data: appSettings });
   
  } catch (error) {
    return helpers.failure({ message: error.message });
  }


};