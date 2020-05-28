const dbModels = require('../../models')



module.exports.createPujari_Review = async (pujari_review) => {
  try {
    const createPujari_Review = await dbModels.Pujari_reviews
      .create({
        id: pujari_review.id,
        reviewDate: pujari_review.reviewDate,
        rating: pujari_review.rating,
        review: pujari_review.review,
        userId: pujari_review.userId,
        pujariId: pujari_review.pujariId,
        pujaId: pujari_review.pujaId,
        visibleFlag: pujari_review.visibleFlag,
        bookingId: pujari_review.bookingId
      });
    return createPujari_Review;

  } catch (error) {
    throw error
  }
}

module.exports.getAllPujari_reviews = async () => {
  try {
    const pujari_review = await dbModels.Pujari_reviews
      .findAll();
    return pujari_review;
  } catch (error) {
    throw error
  }
}


module.exports.updatePujari_Review = async (pujari_reviewId, pujari_review) => {
  try {
    const pujari_review = await dbModels.Pujari_reviews
      .update({
        reviewDate: pujari_review.reviewDate,
        rating: pujari_review.rating,
        review: pujari_review.review,
        userId: pujari_review.userId,
        pujariId: pujari_review.pujariId,
        pujaId: pujari_review.pujaId
      },
        {
          where: {
            id: pujari_reviewId
          }
        });
    return "updated";
  } catch (error) {
    throw error
  }
}