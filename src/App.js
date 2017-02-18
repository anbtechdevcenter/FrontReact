import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

class App extends Component {

  render() {
//
    return (
    <MuiThemeProvider>
      <div className="App">

<ul className="nav nav-pills">
  <li role="presentation"><Link to="home">Home</Link></li>
  <li role="presentation"><Link to="about">About</Link></li>
  <li role="presentation"><Link to="articles">Articles</Link></li>
  <li role="presentation"><Link to="study">Study</Link></li>
</ul>
 {this.props.children}

      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
