const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const appSettings = JSON.parse(event.body);;
        // var appSettings = {
        //     id:1,  key: 'newKey', value: 'newValue', type: 'String', displayName: 'TestDisplay'
        // };
        const isUpdated = await dbModels.AppSettings
            .update({
                key: appSettings.key,
                value: appSettings.value,
                type: appSettings.type,
                displayName: appSettings.displayName
            },{ where : { id: appSettings.id } });
        return helpers.success({ data: isUpdated });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};