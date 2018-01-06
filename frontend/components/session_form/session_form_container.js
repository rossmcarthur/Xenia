import { connect } from 'react-redux';
import { login, logout, signup, receiveErrors } from '../../actions/session_actions';
import { loginModal, signupModal, closeModal } from '../../actions/ui_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, { location }) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    session_modal: state.ui.modals.session_modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    logout: () => dispatch(logout()),
    login: user => dispatch(login(user)),
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
