const dbModels = require('../../models')

module.exports.createSetting = async function (appSettings) {
    try {
        const createdSetting = await dbModels.AppSettings
            .create({
                key: appSettings.key,
                value: appSettings.value,
                type: appSettings.type,
                displayName: appSettings.displayName,
            });
        return createdSetting
    } catch (error) {
        console.error('unable to create app setting')

    }
}

module.exports.deleteSetting = async function (id) {
    try {
        const isDeleted = await dbModels.AppSettings
            .destroy({
                where: { id: id }
            });
        return isDeleted;
    } catch (error) {
        console.error('unable to delete setting')

    }

}

module.exports.getAllSettings = async function () {
    try {
        return appSettingsList = await dbModels.AppSettings
            .findAll();

    } catch (error) {
        console.error("unable to fetch all settings")
    }
}

module.exports.getByKey = async function (keyName) {
    try {
       return await dbModels.AppSettings
            .findAll(
                {
                    where: {
                        key: keyName
                    }
                }
            );
    } catch (error) {
        console.error("unable to get setting by key")

    }

}

module.exports.updateKey = async  function(appSettings) {
    try {
       return await dbModels.AppSettings
        .update({
            key: appSettings.key,
            value: appSettings.value,
            type: appSettings.type,
            displayName: appSettings.displayName
        },{ where : { id: appSettings.id } });
    } catch (error) {
        
    }
} 