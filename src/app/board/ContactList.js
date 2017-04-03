import React, { Component, PropTypes } from 'react';

import ContactItem from './ContactItem';

// ContactList
export default class ContactList extends Component {
  render(){
    let filteredContacts = this.props.contacts.filter(
      (contact) =>  contact//contact.boardTitle.indexOf(this.props.filterText) !== -1
    );
    return(
<div>



      <table className="ui celled striped table">
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
