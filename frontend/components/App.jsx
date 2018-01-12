import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import LogoutContainer from './logout/logout_container';
import SpotShowContainer from './spots/spot_show_container';
import SpotFormContainer from './spots/spot_form_container';

const App = () => (
  <div>
    <header className="main-header">
      <Route exact path = "/" component={ SessionContainer } />
      <Route exact path='/spots/:spotId' component={ SpotShowContainer } />
      <Route exact path='/spots/' component={ SpotFormContainer } />
    </header>
  </div>
);

const SessionContainer = () => (
  <div className = "session-container">
    <Link to="/" className="header-link">
      <img className="homepage-icon" src={window.staticImages.XeniaLogo}/>
    </Link>
    <div className='main-container'>
      <LogoutContainer />
      <SessionFormContainer />
    </div>
  </div>

);

export default App;
