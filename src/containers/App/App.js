import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './App.css';
import HomePage from '../HomePage/HomePage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { selectors } from './reducers';
import { actions } from './actions';

export const mapStateToProps = state => ({
  getDog: selectors.getDog(state)
});

export const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    ...actions
  }, dispatch);
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onClickRequestDog = this.onClickRequestDog.bind(this);
  }

  componentDidMount() {
  }

  onClickRequestDog() {
    this.props.requestDog(1);
  }


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Reactjs Boilerplate</h2>
            <h4>Dockerized - Redux - Saga - i18n - React-Meterial - Jest - ESlint</h4>

            <p>{ this.props.t('Welcome to React') }</p>
            <button className="btn-set-locale" onClick={() => this.props.i18n.changeLanguage('en')}>en</button>
            <button className="btn-set-locale" onClick={() => this.props.i18n.changeLanguage('es')}>es</button>
            <Button onClick={ this.onClickRequestDog } variant="contained" color="primary">
              Click to make ajax call
            </Button>
            <div dangerouslySetInnerHTML={{ __html: this.props.getDog || '&nbsp;' }} />
            <hr/>
            <p>
              Edits
              <code> src/App.js </code>
              and save to reload.
            </p>
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
  requestDog: PropTypes.func,
  onRequestDog: PropTypes.func,
  getDog: PropTypes.string,
  t: PropTypes.func,
  i18n: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(withNamespaces()(App));
