const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const faq = await dbModels.FAQ.findOne({ where: { id: event.pathParameters.id } });
    return helpers.success({ data: faq });

  } catch (error) {

    return helpers.failure({ message: error.message });
  }
};