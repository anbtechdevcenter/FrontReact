import React, { Component } from 'react';
//import { createStore, combineReducers } from 'redux'
//import { reducer as formReducer } from 'redux-form'
import {AnbSelect} from './components';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {darkBlack, lightBlack} from 'material-ui/styles/colors';



//const reducers = {
  // ... your other reducers here ...
//  form: formReducer     // <---- Mounted at 'form'
//};
//const reducer = combineReducers(reducers);
//const store = createStore(reducer);

export default class Articles extends Component {

  constructor(props){
    super(props);
    this.state = {
      rank : 'R30'
    };
    this.findUser = this.findUser.bind(this);
    this.getRank = this.getRank.bind(this);
  }

  findUser(val){
    console.log("rank ", val);
    this.setState({
      rank : val
    });
  }

 getRank(){
   console.log("rank is ", this.state.rank);
   return this.state.rank;
 }

    render() {

        return (
          <div>

            <AnbSelect dataType='rank'
              label="직급"
              onChange={this.findUser}/>

            <DatePicker hintText="달력"
              firstDayOfWeek={0}/>
            <RaisedButton label="조회" primary={true}
             onClick={this.getRank}/>

            <List>
            <Subheader>Today</Subheader>
            <ListItem
              leftAvatar={<Avatar src="images/women.png" />}
              primaryText="Brunch this weekend?"
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
            <ListItem
              leftAvatar={<Avatar src="images/man.png" />}
              primaryText={
                <p>Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
              }
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>to me, Scott, Jennifer</span> --
                  Wish I could come, but I&apos;m out of town this weekend.
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
      </List>

          </div>
        );
    }
}
