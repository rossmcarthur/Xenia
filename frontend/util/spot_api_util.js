export const fetchSpots = bounds => {
  return $.ajax({
    method: 'get',
    url: 'api/spots',
    data: { bounds }
  });
};

export const fetchSpot = id => {
  return $.ajax({
    method: 'get',
    url: `api/spots/${id}`
  });
};

export const createSpot = formData => {
  return $.ajax({
    method: 'post',
    url: 'api/spots',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData
  });
};

export const updateSpot = spot => {
  return $.ajax({
    method: 'patch',
    url: `api/spots/${spot.id}`,
    data: { spot }
  });
};

export const removeSpot = id => {
  return $.ajax({
    method: 'delete',
    url: `api/spots/${id}`
  });
};
