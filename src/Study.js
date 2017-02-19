import React, { Component, PropTypes } from 'react';
import {AnbUtil} from './components';

export default class Study extends Component {

constructor(props){
  super(props);
  this.state = {
    filterText : '',
    contacts : [],
    status : 0,
    dataKey : ''
  };

  this.handleCheck = this.handleCheck.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
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

    let isChecked = e.target.checked;
    if(isChecked){
      this.setState({
        dataKey : e.target.value
      });
    }

  }

// npm install --save whatwg-fetch
  componentDidMount(){
    let url = '/board';
    AnbUtil.REST({type:'R', url: url}, (res)=>{
      this.setState({
        contacts : res
      });
    });

  }

  render(){
    return(
      <div>

      <div className="ui form">
        <div className="field">
          <SearchBar filterText={this.state.filterText}
          onUserInput={this.handleUserInput.bind(this)}/>
        </div>

        <div className="field">
          <button className="fluid ui red basic button"
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


// SearchBar
class SearchBar extends Component {

  handleChange(value){
    this.props.onUserInput(value)
  }



  render(){
    return(
      <div>
        <label>제목 검색</label>
        <input type="search"  placeholder='Last Name'
          value={this.props.filterText}
          onChange={this.handleChange.bind(this)}/>
       </div>
    )

  }
}
SearchBar.propTypes = {
  filterText : PropTypes.string.isRequired
}

// ContactList
class ContactList extends Component {
  render(){
    let filteredContacts = this.props.contacts.filter(
      (contact) => contact.boardTitle.indexOf(this.props.filterText) !== -1
    );
    return(
<div>



      <table className="ui olive table">
        <thead>
          <tr>
            <th>Header</th>
            <th>제 목</th>
            <th>내 용</th>
          </tr>
        </thead>

        <tbody>
          {filteredContacts.map(
            (contact, i) => <ContactItem key={contact.seqBoard}
                                    dataKey={contact.seqBoard}
                                    rowIndex={i+1}
                                    boardTitle={contact.boardTitle}
                                    boardContents={contact.boardContents}
                                    onChange={this.props.onChange}/>
          )}
        </tbody>
      </table>

</div>
    );
  }
}
ContactList.propTypes = {
  contacts : PropTypes.arrayOf(PropTypes.object)
}


// ContactItem
class ContactItem extends Component {


  render(){
    return(

      <tr>
          <td className="center aligned" width="1">
            <input type="checkbox" onChange={this.props.onChange} value={this.props.dataKey}/>
          </td>
          <td>{this.props.boardTitle} </td>
          <td>{this.props.boardContents}</td>
      </tr>

    );

  }
}
ContactItem.propTypes={
  rowIndex : PropTypes.number,
  boardTitle : PropTypes.string.isRequired,
  boardContents : PropTypes.string.isRequired
}
