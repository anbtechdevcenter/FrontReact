import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class MeanDetailList extends Component {

    constructor(props) {
        super(props);
    }

    render() {



        return(

              <tr>
                  <td>{this.props.userInfo}</td>
                  <td>{this.props.applyQty}</td>
                  <td>{this.props.applyDate}</td>
                  <td>{this.props.fixedDate}</td>
              </tr>

        );
    }
}

MeanDetailList.propTypes = propTypes;
MeanDetailList.defaultProps = defaultProps;

export default MeanDetailList;
