import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import { loginModal, signupModal, closeModal } from '../../actions/ui_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    login_modal: state.ui.login_modal,
    signup_modal: state.ui.signup_modal,
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;
  return {
    processForm: user => dispatch(processForm(user)),
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
    formType,
    clearErrors: () => dispatch(receiveErrors([])),
    loginModal: () => dispatch(loginModal()),
    signupModal: () => dispatch(signupModal()),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
