const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const Sequelize = require('sequelize');
const pujaService = require('./pujas.service')

module.exports = async (event, context, callback) => {
  try {
    const queryParams = JSON.parse(event.body);
    //const queryParams = { pujaname: '', pujatype: 'Both', languagename: null }
    if (queryParams.pujatype == null || queryParams.pujatype == '') {
      queryParams.pujatype = ['Online', 'Offline'];
    }
    const pujas = await pujaService.searchPujas(queryParams)
    return helpers.success({ data: pujas });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
}