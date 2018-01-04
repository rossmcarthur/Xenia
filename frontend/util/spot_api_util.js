export const fetchSpots = () => {
  return $.ajax({
    method: 'get',
    url: 'api/spots',
  });
};

export const fetchSpot = id => {
  return $.ajax({
    method: 'get',
    url: `api/spots/${id}`
  });
};

export const createSpot = spot => {
  return $.ajax({
    method: 'post',
    url: 'api/spots',
    data: { spot }
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
