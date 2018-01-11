import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.handleSignupModal = this.handleSignupModal.bind(this);
    this.handleLoginModal = this.handleLoginModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    } else if (!this.props.session_modal && !this.props.loggedIn) {
      this.props.clearErrors();
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  toggleModal(e) {
    e.preventDefault();
      if (this.props.session_modal === 'login') {
        this.props.signupModal();
      } else if (this.props.session_modal === 'signup') {
        this.props.loginModal();
      }
      this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    if (this.props.session_modal === 'login') {
      this.props.login(user);
    } else if (this.props.session_modal === 'signup'){
      this.props.signup(user);
    }
  }

  handleGuest(e) {
    e.stopPropagation();
    const guest = {
      email: 'guest123@gmail.com',
      password: 'guestpassword'
    };
    this.props.login(guest);
    this.handleCloseModal();
  }

  handleLoginModal(e) {
    this.props.loginModal();
  }

  handleSignupModal(e) {
    this.props.signupModal();
  }

  handleCloseModal(e) {
    this.props.closeModal();
    this.setState({email: '', password: ''});
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  navLink() {
    if (this.props.session_modal === 'login') {
      return <button onClick={this.toggleModal} className="login-link2">Sign up</button>;
    } else if (this.props.session_modal === 'signup'){
      return <button onClick={this.toggleModal} className="signup-link2">Log in</button>;
    }
  }

  message() {
    if (this.props.session_modal === 'login') {
      return "Don't have an account?";
    } else if (this.props.session_modal === 'signup'){
      return "Already have a Xenia account?";
    }
  }

  buttonMessage() {
    if (this.props.session_modal === 'login') {
      return "Log in";
    } else if (this.props.session_modal === 'signup'){
      return "Sign up";
    }
  }

  renderErrors() {
    return(
      <ul className="errors-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (!this.props.session_modal) {
      return null;
    }
      return (
        <div onClick={this.handleCloseModal} className="modal-window">
          <div onClick={this.stopPropagation} className="login-form-container">
            <button onClick={this.handleCloseModal} className="close-icon">&times;</button>
            <form onSubmit={this.handleSubmit} className="login-form-box">
              { this.renderErrors() }
              <div className="login-form">
                <br/>
                  <input type="text"
                    value={this.state.email}
                    placeholder="Email address"
                    onChange={this.update('email')}
                    className="email-input"
                  />
                <br/>
                  <input type="password"
                    value={this.state.password}
                    placeholder="Password"
                    onChange={this.update('password')}
                    className="password-input"
                  />
                <br/>
                <input className="login-button" type="submit" value={this.buttonMessage()} />
                <div className="session-redirect-border">
                  <p className="session-redirect">{this.message()} {this.navLink()}</p>
                  <button className="guest-login" onClick={this.handleGuest}>Guest Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
    }
  }

export default withRouter(SessionForm);
