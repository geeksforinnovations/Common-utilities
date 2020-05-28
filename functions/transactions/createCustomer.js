const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const helpers = require("../../utils/helpers");

module.exports =  async (event, context) => {
    console.log('started transaction', event)
    console.log('started transaction1', process.env.stripeSecretKey)
    

    try {
        const customer= await stripe.customers.create({
            email: 'man1i@gmail.com',
            name: 'mani',
            address: {
                city: 'jhjuh',
                country: 'ind',
                line1: 'jhh',
                line2: 'jhujh',
                postal_code: '523333',
                state: 'la'
            }, account_balance: 1,
        });
        return helpers.success({ data: customer });
    } catch (e) {
        return helpers.failure({ message: e.message });
    }
}


