import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import logo from './logo.svg';
import './App.css';
import HomePage from '../HomePage/HomePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { getUsername } from './selectors';
import { changeUsername } from './actions';

export const mapStateToProps = state => ({
  username: getUsername(state)
});

export const mapDispatchToProps = {
  changeUsername
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.changeUsername('nam.vuong');
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edits
              <code>src/App.js</code>
              and save to reload.
              { this.props.username }
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>

          <div className="AppContent">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  changeUsername: PropTypes.func,
  username: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
