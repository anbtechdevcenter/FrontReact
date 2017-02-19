import React, { Component, PropTypes } from 'react';

// ContactItem
export default  class ContactItem extends Component {


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
