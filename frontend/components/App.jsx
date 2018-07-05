import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ProtectedRoute } from '../util/route_util';
import SessionFormContainer from './session_form/session_form_container';
import LogoutContainer from './logout/logout_container';
import SpotShowContainer from './spots/spot_show_container';
import SpotFormContainer from './spots/spot_form_container';
import SpotIndexContainer from './spots/spot_index_container';
import SearchContainer from './search/search_container';
import BookingPage from './bookings/booking_page';

const App = () => (
  <div className='App'>
    <header className="main-header">
      <Route exact path="/" component={ SessionContainer } />
      <Switch>
        <ProtectedRoute exact path='/spots/create' component={ SpotFormContainer } />
        <Route exact path='/spots/:spotId' component={ SpotShowContainer } />
      </Switch>
      <Route exact path="/spots" component={ SearchContainer } />
      <ProtectedRoute exact path='/bookings' component={ BookingPage } />
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
