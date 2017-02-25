import React, { Component, PropTypes } from 'react';
import MemberItem from './MemberItem';


const propTypes = {

};

const defaultProps = {

};

// 1
class MemberList extends Component {

    constructor(props) {
        super(props);
    }

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

MemberList.propTypes = propTypes;
MemberList.defaultProps = defaultProps;

export default MemberList;
