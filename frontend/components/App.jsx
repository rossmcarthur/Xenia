import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import LogoutContainer from './logout/logout_container';
import SpotShowContainer from './spots/spot_show_container';
const App = () => (
  <div>
    <header className="main-header">
      <Route exact path = "/" component={ SessionContainer } />
      <Route exact path='/spots/:spotId' component={ SpotShowContainer } />
    </header>
  </div>
);

const SessionContainer = () => (
  <div className = "session-container">
    <Link to="/" className="header-link">
      <img className="homepage-icon" src={window.staticImages.XeniaLogo}/>
    </Link>
    <div>
      <LogoutContainer />
      <SessionFormContainer />
    </div>
  </div>
);

export default App;
