'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('FAQ', [{
        question: 'HOW DO I ACTIVATE MY ACCOUNT?',
        answer: JSON.stringify('The instructions to activate your account will be sent to your email once you have submitted the registration form. If you did not receive this email, your email service provider’s mailing software may be blocking it. You can try checking your junk / spam folder or contact us at help@samplestore.com')
      },{
        question:'HOW CAN I TRACK MY ORDERS & PAYMENT?',
        answer:JSON.stringify('After logging into your account, the status of your checkout history can be found under Order History. For orders via registered postage, a tracking number (article tracking number) will be given to you after the receipt given from Singapore Post Limited (SingPost).')
      },{
        question:'HOW DO I CANCEL MY ORDERS BEFORE I MAKE A PAYMENT?',
        answer:JSON.stringify('After logging into your account, go to your Shopping Cart. Here, you will be able to make payment or cancel your order. Note: We cannot give refunds once payment is verified.')
      },{
        question:'HOW DO I MAKE PAYMENTS USING PAYPAL? HOW DOES IT WORK?',
        answer:JSON.stringify('Paypal is the easiest way to make payments online. While checking out your order, you will be redirected to the Paypal website. Be sure to fill in correct details for fast & hassle-free payment processing. After a successful Paypal payment, a payment advice will be automatically generated to Samplestore.com system for your order.')
      },{
        question:'WHAT ARE THE PAYMENT METHODS AVAILABLE?',
        answer:JSON.stringify('At the moment, we only accept Credit/Debit cards and Paypal payments.')
      },{
        question:'CAN I PAY USING PAYPAL WITHOUT A PAYPAL ACCOUNT?',
        answer:JSON.stringify('Yes! It is commonly misunderstood that a Paypal account is needed in order to make payments through Paypal. The truth is you DO NOT need one, although we strongly recommend you sign up to enjoy the added ease of use.Without a Paypal account, all you need is any Debit/Credit card stated below that is supported by Paypal. By using Paypal, we can process & deliver your orders to you in a shorter time. Paypal is the easiest & most secure way to make payment online. No account needed.')
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('FAQ', null, {});
  }
};
