import React, { Component } from 'react';
import {AnbUtil} from '../../components';

import { Dimmer, Loader } from 'semantic-ui-react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

export default class Board extends Component {

constructor(props){
  super(props);
  this.state = {
    filterText : '',
    filterContent : '',
    contacts : [],
    status : 0,
    dataKey : '',
    active : false
  };

  this.handleCheck = this.handleCheck.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handleFind = this.handleFind.bind(this);
  this.handleSave = this.handleSave.bind(this);
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

  onContentChange(e){
  //  console.log(" handle >> ", e.target.value);
    this.setState({filterContent:e.target.value})
  }

  handleDelete(){
    var seqBoard = this.state.dataKey;
    let url = '/board/'+seqBoard;
//console.log(">> " ,seqBoard);
    AnbUtil.REST({type:"D", url : url}, ()=>{
      this.handleFind();
    });
  }

  handleCheck(e){
    //console.log(" check ", e.target.value);
    this.setState({
      dataKey : e.target.value
    });
  }

 /**
 * 조회한다.
 */
  handleFind(){
    this.setState({active : true});
    setTimeout(()=>{
      let url = '/board';
      AnbUtil.REST({type:'R', url: url}, (res)=>{
        //  console.log(" >> " , res);
        this.setState({
          contacts : res,
          filterText : '',
          filterContent : '',
          active : false
        });
      });
    }, 1000);

  }


  handleSave(){
    console.log("Title ", this.state.filterText);
    var obj = { 'type' : 'C', 'url':'/board', 'param': JSON.stringify({'boardTitle' : this.state.filterText, 'boardContents' : this.state.filterContent})};
    AnbUtil.REST(obj, (res)=>{
      //console.log("save");
      this.handleFind();
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
          filterContent={this.state.filterContent}
          onUserInput={this.handleUserInput.bind(this)}
          onContentChange={this.onContentChange.bind(this)}
          />
        </div>

        <div className="field">
          <button className="ui blue button"
            onClick={this.handleFind}>
            조회
          </button>
          <button className="ui olive button"
            onClick={this.handleSave}>
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
