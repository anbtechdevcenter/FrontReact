import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Dimmer, Loader } from 'semantic-ui-react';


injectTapEventPlugin();

// 1
class App extends Component {

  state = {
    loaderSize : 'massive',
    loaderActive : false
  }


  onLoaderControl(){

  }

  render() {

    return (
    <MuiThemeProvider>
      <div className="App">

<ul className="nav nav-pills">
  <li role="presentation"><Link to="login">로그인</Link></li>
  <li role="presentation"><Link to="meal">식권신청</Link></li>
  <li role="presentation"><Link to="mealList">식권현황</Link></li>
  <li role="presentation"><Link to="study">게시판</Link></li>
</ul>


<Dimmer active={this.state.loaderActive} size={this.state.loaderSize}>
  <Loader />
</Dimmer>


 {this.props.children}

      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
