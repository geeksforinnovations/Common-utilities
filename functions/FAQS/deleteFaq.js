const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const isDeleted = await dbModels.FAQ
            .destroy({ where: { id: event.pathParameters.id } });
        return helpers.success({ data: isDeleted });
    } catch (error) {
        return helpers.failure({message: error.message});
    }
};