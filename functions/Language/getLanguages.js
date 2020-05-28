const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
    const languages = await dbModels.Languages
      .findAll({
        attributes: ['id','name'],
      });
    //console.log("pujas", x)
    return helpers.success({ data: languages });
   
  } catch (error) {
    return helpers.failure({ message: error.message });
  }


};