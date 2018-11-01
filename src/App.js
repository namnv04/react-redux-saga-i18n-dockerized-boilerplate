import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import HomeComponent from './components/Home/Home';
import NotFoundComponent from './components/NotFound/NotFound';
import AboutComponent from './components/About/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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
              <Route exact path="/" component={HomeComponent} />
              <Route path="/about" component={AboutComponent} />
              <Route component={NotFoundComponent} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
