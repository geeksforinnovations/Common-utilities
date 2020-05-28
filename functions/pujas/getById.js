const helpers = require("../../utils/helpers");
const pujaService = require("./pujas.service");

module.exports = async (event, context, callback) => {
  try {
    const id = event.pathParameters.id;
    if (!helpers.isNumber(id)) {
      return helpers.failure({ message: error.message }, 400);
    }
    const pujaDetails = await pujaService.getById(event.pathParameters.id);
    return helpers.success({ data: pujaDetails });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};
