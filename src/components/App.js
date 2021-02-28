import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import Loadable from 'react-loadable';

import Header from './common/Header';
import Head from './Head';

const LoadableDashboard = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './Dashboard'),
  loading: () => <div>Loading...</div>
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './about/About'),
  loading: () => <div>Loading...</div>
});

const App = () => (
  <div className="app">
    <Head />
    <Header />
    <main className="main">
      <Switch>
        <Route exact path="/" component={LoadableDashboard} />
        <Route path="/about" component={LoadableAbout} />
      </Switch>
    </main>

    <footer />
  </div>
);

export default App;
