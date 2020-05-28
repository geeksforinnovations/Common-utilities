const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const helpers = require("../../utils/helpers");
const dbModels = require('../../models')

module.exports = async (event, context) => {
    const body = JSON.parse(event.body);
    const pujaId = body.pujaId;
    const source =  body.source
    const description = "Puja charge";

    try {
        const selectedPuja = await dbModels.Pujas.findOne({ where: { id: pujaId } });
        const description = "charges for " + selectedPuja.name + ".";
       
        const customer = await stripe.charges.create({
            source,
            amount: selectedPuja.cost ? selectedPuja.cost : '1000',
            description,
            currency: "usd"
        });
        console.log('details',customer)
        return helpers.success({ data: customer });
    } catch (e) {
        return helpers.failure({ message: e.message });
    }
}


