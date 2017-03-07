import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../semantic/dist/semantic.min.css';
import 'react-datepicker/dist/react-datepicker.css';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import About from './About';
import Login from './app/Login';
import Study from './app/board/Board';
import Meal from './app/meal/Meal';
import MealList from './app/meal/MealList';

// 1
ReactDOM.render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={Login} />
         <Route path="login" component={Login} />
         <Route path="meal" component={Meal} />
         <Route path="mealList" component={MealList} />
         <Route path="study" component={Study} />
      </Route>
   </Router>, document.getElementById('root')
);
