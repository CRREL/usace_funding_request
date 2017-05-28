import app from 'ampersand-app';
import React from 'react';
import ReactDOM from 'react-dom';
import Reflux from 'reflux';
import Header from './containers/header/Header';
import Home from './containers/temp/Home';
import Other from './containers/temp/Other';
import { HashRouter as Router, Route } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import testStore from './stores/testStore';

// import styles
import './css/reset.css';
import './css/bootstrap/css/bootstrap.min.css';
import './css/index.css';

const FRS = () => {
  return (
    <Router hashType="noslash">
      <div>

        <PageHeader>
          <Header />
        </PageHeader>

        <Route exact path="/" component={Home} />

        <Route path="/otherpage/:variable" component={Other} />

      </div>
    </Router>
  )
}

const actions = Reflux.createActions([
  'loadSomeTestItems'
]);

// sometimes it makes it easier to mount app globally for development
// comment this out for production
window.app = app;

app.extend({
  actions: actions,
  router: Router,
  init() {
    ReactDOM.render(
      <FRS/>, document.getElementById('root')
    )
  }
});

// set up any stores here that way app is already set up with actions and stuff

app.testStore = new testStore();

// then start up the app:
app.init();