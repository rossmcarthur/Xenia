import React from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import SessionFormContainer from './session_form/session_form_container';
import GreetingContainer from './greeting/greeting_container';
const App = () => (
  <div>
    <header>
        <h1>Welcome To Xenia</h1>
      <GreetingContainer />
    </header>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />

  </div>
)

export default App;
