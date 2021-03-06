import React, { Component, PropTypes } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';
import {Button} from 'react-onsenui';
import { Accordion } from 'semantic-ui-react';

import {AnbUtil, AnbModal, AnbSelect} from '../../components';

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
      modalClose : false,
      projectList : [],
      prjId :"ANB_201703262043036"
    }

    moment.locale('ko');

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleHide= this.handleHide.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleOnLoad = this.handleOnLoad.bind(this);


  }

  handleOnLoad(){
    //console.log("on load ");
    AnbUtil.REST({"type": "R", "url" : "/employee"}, (res)=> {
      var user = res.filter(function(item){
        return item.empId  == "EMP_201703092230";
      })
      console.log("[emp] ", user);
    });
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
  }


  handleModalClose(){
    this.setState({
      modalClose : false
    })
  }

  /*식권신청 오케이*/
  handleOk(){
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
      this.setState({
        modalClose : false
      });
    });


  }

 handleSelectChange(data) {
   console.log("[seldata] ", data);
 }



    render() {

      this.handleOnLoad();


        return(
            <div>

                <form className="ui form">
                  <div className="field">
                    <label>프로젝트명</label>
                    <AnbSelect dataType="project"
                        onChange={this.handleSelectChange}/>
                  </div>
                  <div className="field">
                    <label>신청일자</label>
                    <DatePicker
                      className="field ui input"
                      dateFormat="YYYY-MM-DD"
                      locale="ko-gb"
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

                  <Button modifier="large" onClick={this.handleClick}>식권신청</Button>

                  <AnbModal
                    title="신청알림"
                    message="식권신청을 하시겠습니까?"
                    handleOk={this.handleOk}
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
