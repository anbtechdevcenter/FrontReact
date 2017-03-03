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
            <DatePicker
              className="ui input"
              dateFormat="YYYY-MM-DD"
                selected={this.state.startDate}
                onChange={this.handleChange} />

            </div>
        );
    }
}

Meal.propTypes = propTypes;
Meal.defaultProps = defaultProps;

export default Meal;
