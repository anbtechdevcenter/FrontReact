import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class MemberItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>

              <td className="center aligned" width="1">
                <input type="checkbox" onChange={this.props.onChange} value={this.props.dataKey}/>
              </td>
              <td>{this.props.member.rank.rankName} </td>
              <td>{this.props.member.userInfo}</td>

            </div>
        );
    }
}

MemberItem.propTypes = propTypes;
MemberItem.defaultProps = defaultProps;

export default MemberItem;
