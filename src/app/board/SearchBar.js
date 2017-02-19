import React, { Component, PropTypes } from 'react';

// SearchBar
export default  class SearchBar extends Component {

  handleChange(value){
    this.props.onUserInput(value)
  }

  handleContent(value){
    this.props.onContentChange(value);
  }



  render(){
    return(
      <div>
      <div className="field">
        <label>제목</label>
        <input type="search"  placeholder='제목'
          value={this.props.filterText}
          onChange={this.handleChange.bind(this)}/>
      </div>

      <div className="field">
          <label>내용</label>
          <input type="text"  placeholder='내용'
            value={this.props.filterContent}
            onChange={this.handleContent.bind(this)}
            />
      </div>

       </div>
    )

  }
}
SearchBar.propTypes = {
  filterText : PropTypes.string.isRequired
}
