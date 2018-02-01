export const createReview = review => {
  return $.ajax({
    method: 'post',
    url: `/api/spot/${review.spotId}/reviews`,
    data: { review }
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: 'delete',
    url: `/api/reviews/${id}`
  });
};
