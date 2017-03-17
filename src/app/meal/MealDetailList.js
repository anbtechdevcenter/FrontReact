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
<div className="ui celled list">

          <div className="item">
            <div className="list">
              <div class="item">  {this.props.userInfo} </div>
              <div class="item">  {this.props.applyQty} </div>
              <div class="item">  {this.props.applyDate}  </div>
              <div class="item">  {this.props.fixedDate}  </div>
            </div>
          </div>
</div>

        );
    }
}

MeanDetailList.propTypes = propTypes;
MeanDetailList.defaultProps = defaultProps;

export default MeanDetailList;
