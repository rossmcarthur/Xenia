import { connect } from 'react-redux';
import { loginModal, signupModal, closeModal } from '../../actions/ui_actions';
import { logout } from '../../actions/session_actions';
import Logout from './logout';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  loginModal: () => dispatch(loginModal()),
  signupModal: () => dispatch(signupModal()),
  closeModal: () => dispatch(closeModal()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout);
