import React, { Component, PropTypes } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';

import {AnbUtil, AnbModal} from '../../components';

const propTypes = {
  member : PropTypes.array
};

const defaultProps = {

};

class Meal extends Component {
  constructor(props){
    super(props);
    this.state= {
      startDate : moment(),
      modalClose : false
    }

    moment.locale('ko');

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHide= this.handleHide.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
      modalClose : false
    });
  }

 handleHide(){
   console.log(" >> ");
   this.setState({
     modalClose : false
   });
 }

  handleClick(){

    this.setState({
      modalClose : true
    });

return false;

    var selDate = this.state.startDate.format();

    var meal = {
      "applyDate": selDate,
      "applyQty": 20,
      "buyPrice": 0,
      "employee": {
        "empId": "EMP_201703092230",
      },
      "fixedDate": "2017-03-09T13:03:57.658Z",
      "fixedQty": 0,
      "mealType": "string",
      "reason": "string",
      "seqMeal": "string",
      "userInfo": "string"
    };

    var obj = { 'type' : 'C', 'url':'/meal', 'param': JSON.stringify(meal)};
    AnbUtil.REST(obj, (res)=>{
      //console.log("save");
      //this.handleFind();
    });

    console.log("신청 ", selDate);
  }


  handleModalClose(){
    this.setState({
      modalClose : false
    })
  }

    render() {
        return(
            <div>

                <form className="ui form">
                  <div className="field">
                    <label>프로젝트명</label>
                    <select multiple="" className="ui dropdown">
                      <option value="SM">SM</option>
                      <option value="HIQ1">HiQOne Renewal</option>
                      <option value="HESS">Hess</option>
                      <option value="DESIGN">Design</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>신청일자</label>
                    <DatePicker
                      className="field ui input"
                      dateFormat="YYYY-MM-DD"
                        selected={this.state.startDate}
                        onChange={this.handleChange} />
                  </div>
                  <div className="field">
                    <label>수령일자</label>
                    <input type="text" name="getdate" readOnly="readonly" placeholder="총무팀에서 지급완료후 수령일자처리" />
                  </div>

                  <div className="field">
                    <label>수량</label>
                    <input type="text" name="getdate" readOnly="readonly" placeholder="기본 20매" value="20"/>
                  </div>

                  <button className="ui button" type="button" onClick={this.handleClick}>식권신청</button>

                  <AnbModal
                    title="신청알림"
                    message="식권신청을 하시겠습니까?"
                    handleClose={this.handleModalClose}
                    show={this.state.modalClose}
                    />

                </form>



            </div>
        );
    }
}

Meal.propTypes = propTypes;
Meal.defaultProps = defaultProps;

export default Meal;
