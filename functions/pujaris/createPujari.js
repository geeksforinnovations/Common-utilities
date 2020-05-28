const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const service = require('./pujariService')


module.exports = async (event, context, callback) => {
  try {
    const pujari = JSON.parse(event.body);
    const data = await service.createPujari(pujari);
    return helpers.success({ data: data });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};
