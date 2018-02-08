export const createReview = review => {
  return $.ajax({
    method: 'post',
    url: `/api/spots/${review.spotId}/reviews`,
    data: { review }
  });
};

export const fetchReviews = spotId => {
  return $.ajax({
    method: 'get',
    url: `/api/spots/${spotId}/reviews`
  });
};

export const deleteReview = id => {
  return $.ajax({
    method: 'delete',
    url: `/api/reviews/${id}`
  });
};
