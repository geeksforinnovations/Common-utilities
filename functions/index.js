'use strict';

const readAllPujas = require('./pujas/getAll')
const getPujaById = require('./pujas/getById')
const createCustomer = require('./transactions/createCustomer')
const payment = require('./transactions/payment')
const createPuja = require('./pujas/createPuja')
const updatePuja = require('./pujas/updatePuja')
const deletePuja = require('./pujas/deletePuja')
const createFaq = require('./FAQS/createFaq')
const updateFaq = require('./FAQS/updateFaq')
const deleteFaq = require('./FAQS/deleteFaq')
const readAllFaqs = require('./FAQS/getAllFaqs')
const getFaqById = require('./FAQS/getFaqById')
const createBooking = require('./Booking/createBooking')
const deleteBooking = require('./Booking/deleteBooking')
const getAllBookings = require('./Booking/getAllBookings')
const getBookingsByPhoneNumber = require('./Booking/getBookingsByPhoneNumber')
const searchPuja = require('./pujas/searchPuja')
const getLanguages = require('./Language/getLanguages')
const generateOTP = require('./otp/create')
const verifyOtp = require('./otp/verify')
const createAppSettings = require('./appSettings/createAppSettings')
const cancelBooking = require('./Booking/cancelBooking')
const updateBooking = require('./Booking/updateBooking')
const getAllAppSettings = require('./appSettings/getAllAppSettings')
const updateAppSettings = require('./appSettings/updateAppSettings')
const deleteAppSettings = require('./appSettings/deleteAppSettings')
const getAppSettingsValueByKey = require('./appSettings/getAppSettingsValueByKey')
const send = require('./email/send')
const createPujari = require('./pujaris/createPujari')
const getAllPujaris = require('./pujaris/getAllPujaris')
const getPujari= require('./pujaris/getPujari')
const updatePujari = require('./pujaris/updatePujari')
const getAllPujari_reviews = require('./pujari_reviews/getAllPujari_reviews')
const createPujari_review = require('./pujari_reviews/createPujari_reviews')
const sendEmails = require('./email/sendEmails')
const getAllBooking_pendings = require('./Booking_Pendings/getAllBooking_pendings')
const createBooking_pendings = require('./Booking_Pendings/createBooking_pendings')
const updateBooking_Pendings = require('./Booking_Pendings/updateBooking_pendings')


module.exports = {
    readAllPujas: readAllPujas,
    getPujaById: getPujaById,
    createCustomer: createCustomer,
    payment: payment,
    createPuja: createPuja,
    updatePuja: updatePuja,
    deletePuja: deletePuja,
    createFaq: createFaq,
    updateFaq: updateFaq,
    deleteFaq: deleteFaq,
    readAllFaqs: readAllFaqs,
    getFaqById: getFaqById,
    createBooking: createBooking,
    deleteBooking: deleteBooking,
    getAllBookings: getAllBookings,
    getBookingsByPhoneNumber: getBookingsByPhoneNumber,
    searchPuja: searchPuja,
    getLanguages: getLanguages,
    generateOTP: generateOTP,
    verifyOtp: verifyOtp,
    cancelBooking: cancelBooking,
    reschedule: updateBooking,
    createAppSettings: createAppSettings,
    getAllAppSettings: getAllAppSettings,
    updateAppSettings: updateAppSettings,
    deleteAppSettings: deleteAppSettings,
    getAppSettingsValueByKey: getAppSettingsValueByKey,
    sendEmail: send,
    sendEmails: sendEmails,
    getAllPujaris: getAllPujaris,
    createPujari: createPujari,
    updatePujari: updatePujari,
    getAllPujari_reviews: getAllPujari_reviews,
    createPujari_review: createPujari_review,
    getPujari:getPujari,
    getAllBooking_pendings:getAllBooking_pendings,
    createBooking_pendings:createBooking_pendings,
    updateBooking_Pendings:updateBooking_Pendings
}
