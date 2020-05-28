const dbModels = require('../../models')
const helpers = require("../../utils/helpers");
const pujaService = require('./pujas.service')


module.exports = async (event, context, callback) => {
  try {
    const puja = JSON.parse(event.body);
    let pujaLanguages = [];
    //  const puja = {id:0,name:'Test',description:'Test',about:'Test',
    //   timeInHrs:4
    //   ,requiredThings:'',
    //   pujaType:'Offline',cost:10000,pujaLanguageIds:[1,2,3],imageId:'test'}

    const Languages = dbModels.Pujas.hasMany(dbModels.PujaLanguages, { as: 'languages', foreignKey: 'pujaid' });
    if (puja.pujaLanguageIds != null && Array.isArray(puja.pujaLanguageIds))
      puja.pujaLanguageIds.map(element => {
        pujaLanguages.push({ languageId: element });
      });

    const createdPuja = await pujaService.createPuja(puja, Languages)
    return helpers.success({ data: createdPuja });
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};
