import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import LogoutContainer from './logout/logout_container';
const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <img className="homepage-icon" src={window.staticImages.XeniaLogo}/>
      </Link>
      <LogoutContainer />
      <SessionFormContainer />
    </header>

  </div>
)

export default App;
