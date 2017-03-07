import React, { Component, PropTypes } from 'react';

import DatePicker from 'react-datepicker';
import moment from 'moment';


const propTypes = {
  member : PropTypes.array
};

const defaultProps = {

};

class Meal extends Component {
  constructor(props){
    super(props);
    this.state= {
      startDate : moment()
    }

    moment.locale('ko');

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
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

                  <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

Meal.propTypes = propTypes;
Meal.defaultProps = defaultProps;

export default Meal;
