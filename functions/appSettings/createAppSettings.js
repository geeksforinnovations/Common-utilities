const helpers = require("../../utils/helpers");
const appSettingsService = require('./appSettings.service')

module.exports = async (event, context, callback) => {
    try {
        const appSettings = JSON.parse(event.body);;
        // var appSettings = {
        //     key: 'testKey', value: 'TestValue', type: 'String', displayName: 'TestDisplay'
        // };
        const setting = await appSettingsService.createSetting(appSettings)
       
        return helpers.success({ data: setting });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};