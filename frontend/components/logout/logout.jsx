import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import SearchContainer from '../search/search_container';
import NavbarContainer from '../navbar/navbar_container';
import SearchBarContainer from '../search/search_bar_container';



class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

// sessionLinks() {
//   return (
//     <div>
//       <div className="nav-head">
//         <nav className="login-signup">
//           <button onClick={this.props.signupModal} className="signup-link">
//             <span className="button-border">Sign Up</span>
//           </button>
//             &nbsp;&nbsp;
//           <button onClick={this.props.loginModal} className="login-link">
//             <span className="button-border">Log In</span>
//           </button>
//         </nav>
//       </div>
//       <div className="home-search-box">
//         <div className="home-text">
//           <h2 className="home-title">Xenia</h2>
//           <p className="home-body">Book unique homes and experiences all over the world.</p>
//         </div>
//         <div className="home-search">
//           <SearchBarContainer />
//         </div>
//       </div>
//     </div>
//   );
// }

homeSearch() {
  return (
    <div className="home-search-box">
      <div className="home-text">
        <h2 className="home-title">Xenia</h2>
        <p className="home-body">Book unique homes and experiences all over the world.</p>
      </div>
      <div className="home-search">
        <SearchBarContainer />
      </div>
    </div>
  );
}

logoutLinks() {
  return (
    <div>
      <div className="nav-head">
        <nav className="login-signup">
            <span className="button-border">Become a host</span>
            &nbsp;&nbsp;
          <button onClick={this.props.logout} className="login-link">
            <span className="button-border">Log Out</span>
          </button>
          <img className="home-user-image" src={this.props.currentUser.image_url} />
        </nav>
      </div>
        {this.homeSearch()}
    </div>
  );
}

loginLinks() {
  return (
    <div>
      <div className="nav-head">
        <nav className="login-signup">
          <button onClick={this.props.signupModal} className="signup-link">
            <span className="button-border">Sign Up</span>
          </button>
            &nbsp;&nbsp;
          <button onClick={this.props.loginModal} className="login-link">
            <span className="button-border">Log In</span>
          </button>
        </nav>
      </div>
        {this.homeSearch()}
    </div>
  );
}

  render() {
    if (this.props.currentUser) {
      return this.logoutLinks();
    } else {
      return this.loginLinks();
    }
  }

  // render() {
  //   if (this.props.currentUser) {
  //     return (
  //         <div className="spot-page">
  //           <header>
  //             <NavbarContainer />
  //           </header>
  //             <SearchContainer />
  //         </div>
  //     );
  //   } else {
  //       return this.sessionLinks();
  //   }
  // }
}

export default Logout;
