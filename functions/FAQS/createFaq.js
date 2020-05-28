const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
  try {
   const faq = JSON.parse(event.body);
    const createdFaq = await dbModels.FAQ
      .create({ question: faq.question,answer:faq.answer
       });
    return helpers.success({ data: createdFaq });
  
  } catch (error) {
    return helpers.failure({ message: error.message });
  }
};