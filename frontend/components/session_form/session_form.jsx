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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleGuest(e) {
    e.preventDefault();
    const guest = {
      email: 'guest123@gmail.com',
      password: 'guestpassword'
    };
    this.props.login({guest});
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link className="login-link2" to="/signup">Sign up</Link>;
    } else {
      return <Link className="signup-link2" to="/login">Log in</Link>;
    }
  }

  message() {
    if (this.props.formType === 'login') {
      return "Don't have an account?"
    } else {
      return "Already have a Xenia account?"
    }
  }

  buttonMessage() {
    if (this.props.formType === 'login') {
      return "Log in"
    } else {
      return "Sign up"
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <Link to="/" className="close-icon">&times;</Link>
        <form onSubmit={this.handleSubmit} className="login-form-box">
          
          {this.renderErrors()}
          <div className="login-form">
            <br/>
              <input type="text"
                value={this.state.email}
                placeholder="Email address"
                onChange={this.update('email')}
                className="login-input"
              />
            <br/>
              <input type="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.update('password')}
                className="login-input"
              />
            <br/>
            <input className="login-button" type="submit" value={this.buttonMessage()} />
            <div className="session-redirect-border">
              <p className="session-redirect">{this.message()} {this.navLink()}</p>
            </div>
            </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
