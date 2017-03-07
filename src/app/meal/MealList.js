import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class MealList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2 className="ui header">개인 식권 신청현황</h2>
                <div className="ui relaxed divided list">
                  <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                      <a className="header">HiQOne Renewal/20매</a>
                      <div className="description">신청일자 : 2017-3-6 / 수령일자 : 2017-3-10</div>
                    </div>
                  </div>
                  <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                      <a className="header">Semantic-Org/Semantic-UI-Docs</a>
                      <div className="description">Updated 22 mins ago</div>
                    </div>
                  </div>
                  <div className="item">
                    <i className="large github middle aligned icon"></i>
                    <div className="content">
                      <a className="header">Semantic-Org/Semantic-UI-Meteor</a>
                      <div className="description">Updated 34 mins ago</div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

MealList.propTypes = propTypes;
MealList.defaultProps = defaultProps;

export default MealList;
