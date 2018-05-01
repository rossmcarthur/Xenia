import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import onClickOutside from "react-onclickoutside";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside() {
    return (
      this.state.show ? this.handleShow() : null
    );
  }

  handleLogout() {
    this.props.logout();
  }

  handleShow() {
    return (
      this.state.show ? this.setState({ show: false}) : this.setState({ show: true })
    );
  }

  dropdownShow() {
  return (
    <div className='dropdown-full'>
      <div className='dropdown-items'>
      <button className='dropdown-logout' onClick={this.handleLogout}>Logout</button>
      </div>
    </div>
  );
}

  render() {
    return (
      <div className='dropdown-container'>
      <img className='nav-user-image' src={this.props.currentUser.image_url} onClick={this.handleShow} />
      {this.state.show ? this.dropdownShow() : null}
    </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside((Dropdown)));
