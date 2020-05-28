const dbModels = require('../../models')
const helpers = require("../../utils/helpers");

module.exports = async (event, context, callback) => {
    try {
        const faq = JSON.parse(event.body);
        const updatedFaq = await dbModels.FAQ
            .updateAttributes({
                question:faq.question,
                answer:faq.answer
            },
            { where: { id: faq.id } });
        return helpers.success({ data: updatedFaq });
    } catch (error) {
        return helpers.failure({ message: error.message });
    }
};