import { connect } from 'react-redux';
import { loginModal, signupModal, closeModal } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = state => {
  return {
    session_modal: state.ui.modals.session_modal,
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginModal: () => dispatch(loginModal()),
  signupModal: () => dispatch(signupModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
