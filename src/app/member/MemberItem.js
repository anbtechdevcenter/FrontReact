import React, { Component } from 'react';

// 1
class MemberItem extends Component {

    render() {
        return(

            <tr>
                <td className="center aligned" width="80">
                  <input type="checkbox" onChange={this.props.onChange} value={this.props.dataKey}/>
                </td>
                <td>{this.props.member.rank.rankName}</td>
                <td>{this.props.member.userInfo}</td>
            </tr>

        );
    }
}

export default MemberItem;
