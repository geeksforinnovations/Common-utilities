const helpers = require("../../utils/helpers");
const pujaService = require('./pujas.service')

module.exports = async (event, context, callback) => {
  try {
    const pujaList = await pujaService.getAllPujas()
    return helpers.success({ data: pujaList });
  
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};