const dbModels = require('../../models')
var constants = require('../../utils/constants');


module.exports.createBooking_pendings = async (booking_pendings) => {
  try {
    const createdBooking_pending = await dbModels.Booking_pendings
      .create({
        pujariId: booking_pendings.pujariId, 
        bookingId: booking_pendings.bookingId,
        status: booking_pendings.status
      });
    return createdBooking_pending;

  } catch (error) {
    throw error
  }
}


module.exports.getAllBooking_Pendings = async (event) => {
  queryParams = event.queryStringParameters;
  // validateQueryParams()
  try {
    const booking_pendings = await dbModels.Booking_pendings
      .findAll({
        // include: [
        //   {
        //     model: dbModels.Booking_pendings,
        //     required: true,
        //     as: 'booking_pending'
        //   }
        // ],
        where:event.queryStringParameters
      });
    return booking_pendings;
  } catch (error) {
    throw error
  }
}


module.exports.updateBooking_Pendings = async (id,booking_pendings) => {
  try {
    // const booking = JSON.parse(event.body);;
    //  var booking = {
    //    id:2, pujaId: 1, languageId: 1, name: 'Manjunath test', phoneNumber: '123456',
    //     bookingDate: new Date(), addressLine1: 'test lingampally', addressLine2: 'MIG test',
    //     requirePujaType:'Online',videoCallUserName:'test@skype',status:'Active'
    // }; 
    const updatedBooking_pending = await dbModels.Booking_pendings
      .update({
        pujariId: booking_pendings.pujariId, 
        bookingId: booking_pendings.bookingId,
        status: booking_pendings.status
      },
        {
          where: {
            id: id
          }
        });

    return updatedBooking_pending;
  } catch (error) {
    throw error
  }
}


module.exports.cancelBookng = async (bookingId) => {
  try {
    const isCancelled = await dbModels.Booking
      .update({ status: constants.CANCELLED }, { where: { id: bookingId } });
    return isCancelled
  } catch (error) {
    throw error
  }

}




module.exports.deleteBooking = async (bookingId) => {
  try {
    const isDeleted = await dbModels.Booking
      .destroy({ where: { id: bookingId } });
    return isDeleted
  } catch (error) {
    throw error
  }
}


