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
            <div>


              <div className="item">
                <i className="large github middle aligned icon"></i>
                <div className="content">
                  <a className="header">{this.props.userInfo} / {this.props.applyQty}매</a>
                  <div className="description">신청일자 : {this.props.applyDate} / 수령일자 : {this.props.fixedDate}</div>
                </div>
              </div>

            </div>
        );
    }
}

MeanDetailList.propTypes = propTypes;
MeanDetailList.defaultProps = defaultProps;

export default MeanDetailList;
