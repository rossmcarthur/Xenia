import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import LogoutContainer from './logout/logout_container';
const App = () => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1 className="homepage-icon">Xenia</h1>
      </Link>
      <LogoutContainer />
      <SessionFormContainer />
    </header>

  </div>
)

export default App;
