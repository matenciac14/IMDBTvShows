import React from 'react';
import Header from './components/Header';
import Movies from './components/Movies';
import Movie from './components/Movie';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header/>
      <div id="main"className="container border-top ">
        <Switch>
          <Route exact path="/" component={Movies}/>
          <Route exact path="/movie" component={Movie}/>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
