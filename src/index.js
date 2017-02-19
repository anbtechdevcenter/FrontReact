import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../semantic/dist/semantic.min.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import Home from './Home';
import About from './About';
import Articles from './Articles';
import Study from './app/board/Board';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Study} />
         <Route path="home" component={Home} />
         <Route path="about" component={About} />
         <Route path="articles" component={Articles} />
         <Route path="study" component={Study} />
      </Route>
   </Router>, document.getElementById('root')
);
