export const LOGIN_MODAL = 'LOGIN_MODAL';
export const SIGNUP_MODAL = 'SIGNUP_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const loginModal = () => {
  return {
    type: LOGIN_MODAL
  };
};

export const signupModal = () => {
  return {
    type: SIGNUP_MODAL
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
