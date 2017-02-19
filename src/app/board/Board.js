import React, { Component, PropTypes } from 'react';
import {AnbUtil} from '../../components';

import { Dimmer, Loader } from 'semantic-ui-react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

export default class Board extends Component {

constructor(props){
  super(props);
  this.state = {
    filterText : '',
    contacts : [],
    status : 0,
    dataKey : '',
    active : false
  };

  this.handleCheck = this.handleCheck.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleFind = this.handleFind.bind(this);
}

/**
* 게시판 조회
*/
getApiData() {
  AnbUtil.REST({type : "R", url : "/board" }, (res)=>{
    this.setState({
      contacts : res
    })
  });
}

  handleUserInput(e){
    this.setState({filterText:e.target.value})
  }

  handleDelete(){

    var seqBoard = this.state.dataKey;
    let url = '/board/'+seqBoard;

    AnbUtil.REST({type:"D", url : url}, ()=>{
      this.getApiData();
    });
  }

  handleCheck(e){
    console.log(" check ");
  }

 /**
 * 조회한다.
 */
  handleFind(){
    this.setState({active : true});
    let url = '/board';
    AnbUtil.REST({type:'R', url: url}, (res)=>{
      //  console.log(" >> " , res);
      this.setState({
        contacts : res,
        active : false
      });
    });
  }

// npm install --save whatwg-fetch
  componentDidMount(){
    //this.handleFind();
  }

  render(){
    return(
      <div>


      <Dimmer active={this.state.active} size={'massive'}>
        <Loader />
      </Dimmer>



      <div className="ui breadcrumb">
        <a className="section">Home</a>
        <div className="divider"> / </div>
        <a className="section">Store</a>
        <div className="divider"> / </div>
        <div className="active section">T-Shirt</div>
      </div>

      <div className="ui slider checkbox">
        <input type="checkbox" name="newsletter" />
        <label>Accept terms and conditions</label>
      </div>

      <div className="ui form">
        <div className="field">
          <SearchBar filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}/>
        </div>

        <div className="field">
          <button className="ui blue button"
            onClick={this.handleFind}>
            조회
          </button>
          <button className="ui olive button">
            저장
          </button>
          <button className="ui red basic button"
            onClick={this.handleDelete}>
            선택삭제
          </button>
          </div>
      </div>

      <div className="ui horizontal divider"/>

      <ContactList contacts={this.state.contacts}
        dataKey={this.state.dataKey}
        filterText={this.state.filterText}
        onChange={this.handleCheck}/>


      </div>

    );
  }
}