import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../semantic/dist/semantic.min.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './Home';
import About from './About';
import Study from './app/board/Board';
import Member from './app/member/Member';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Member} />
         <Route path="home" component={Home} />
         <Route path="about" component={About} />
         <Route path="member" component={Member} />
         <Route path="study" component={Study} />
      </Route>
   </Router>, document.getElementById('root')
);
