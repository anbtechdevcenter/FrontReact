import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

// 1
class MemberItem extends Component {

    constructor(props) {
        super(props);
    }

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

MemberItem.propTypes = propTypes;
MemberItem.defaultProps = defaultProps;

export default MemberItem;
