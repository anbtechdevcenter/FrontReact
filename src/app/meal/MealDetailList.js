import React, { Component, PropTypes } from 'react';

const propTypes = {
  userInfo : PropTypes.string,
  applyQty : PropTypes.number,
  applyDate : PropTypes.string,
  fixedDate : PropTypes.string
};

const defaultProps = {

};

class MeanDetailList extends Component {

  

    render() {



        return(
<div className="ui celled list">

          <div className="item">
            <div className="list">
              <div className="item"> <label>신청자명 : </label> {this.props.userInfo} </div>
              <div className="item"> <label>신청수량 : </label> {this.props.applyQty} </div>
              <div className="item"> <label>신청일자 : </label> {this.props.applyDate}  </div>
              <div className="item"> <label>수령일자 : </label> {this.props.fixedDate}  </div>
            </div>
          </div>
</div>

        );
    }
}

MeanDetailList.propTypes = propTypes;
MeanDetailList.defaultProps = defaultProps;

export default MeanDetailList;
