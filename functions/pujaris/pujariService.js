const dbModels = require('../../models')
var constants = require('../../utils/constants');


module.exports.createPujari = async (pujari) => {
  try {
    const createdPujari = await dbModels.Pujari
      .create({
        firstName: pujari.firstName,
        lastName: pujari.lastName,
        middleName: pujari.middleName,
        description: pujari.description,
        contactNo: pujari.contactNo,
        address1: pujari.address1,
        address2: pujari.address2,
        type: pujari.type,
        city: pujari.city,
        country: pujari.country,
        timeZone: pujari.timeZone,
        status: pujari.status,
        imageId: pujari.imageId,
        rating: pujari.rating,
        experience: pujari.experience
      });
    return createdPujari;

  } catch (error) {
    throw error
  }
}

module.exports.getAllPujaris = async () => {
  try {
    const pujari = await dbModels.Pujari
      .findAll({
        attributes: [
          `id`, `firstName`, `lastName`, `description`, `contactNo`, `type`, `city`, `country`, `timeZone`, `status`, `imageId`, `rating`, `experience`
        ],
        include: [
          {
            model: dbModels.PujariLanguages,
            attributes: ['languageId'],
            required: true,
            include: [
              {
                model: dbModels.Languages,
                attributes: ['name'],
                required: true,

              }],
          }
        ],
        where: { "status": constants.ACCEPTED }
      });
    return pujari;
  } catch (error) {
    throw error
  }
}

module.exports.getPujari = async (id) => {
  try {
    return await dbModels.Pujari.findOne({
      where: { id: id },
    });
  } catch (error) {
    console.error('unable to get by id', error)
    throw error

  }
}

// sample payload
//   {
//     "pujariActive": 0
// }
module.exports.updatePujari = async (pujariId, pujari) => {
  try {
    const pujariData = await dbModels.Pujari
      .update({
        firstName: pujari.firstName,
        lastName: pujari.lastName,
        middleName: pujari.middleName,
        description: pujari.description,
        contactNo: pujari.contactNo,
        address1: pujari.address1,
        address2: pujari.address2,
        type: pujari.type,
        city: pujari.city,
        country: pujari.country,
        timeZone: pujari.timeZone,
        status: pujari.status,
        imageId: pujari.imageId,
        rating: pujari.rating,
        experience: pujari.experience
      },
        {
          where: {
            id: pujariId
          }
        });
    return pujariData;
  } catch (error) {
    throw error
  }
}