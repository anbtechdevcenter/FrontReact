import React, { Component } from 'react';
import MemberItem from './MemberItem';

class MemberList extends Component {


    render() {
      let filteredContacts = this.props.memberlist.filter(
        (member) =>  member//contact.boardTitle.indexOf(this.props.filterText) !== -1
      );

        return(
            <div>


              <table className="ui olive table">
                <thead>
                  <tr>
                    <th>아이디</th>
                    <th>직급</th>
                    <th>이름</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredContacts.map(
                    (member, i) =>
                    <MemberItem key={member.empId}
                                            dataKey={member.empId}
                                            rowIndex={i+1}
                                            member={member}
                                            onChange={this.props.onChange}/>
                  )}
                </tbody>
              </table>

            </div>
        );
    }
}


export default MemberList;
