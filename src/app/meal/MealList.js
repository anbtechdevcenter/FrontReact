import React, { Component } from 'react';

import {AnbUtil} from '../../components';
import { Dimmer, Loader } from 'semantic-ui-react';
import MealDetailList from './MealDetailList';
import { Form } from 'semantic-ui-react';

class MealList extends Component {

    constructor(props) {
        super(props);

        this.state ={
          mealList : []
        }

        this.handleMealGet = this.handleMealGet.bind(this);
    }

    componentDidMount(){

      this.handleMealGet();
    }

    handleMealGet(){
      this.setState({
        active : true
      });
      AnbUtil.REST({type : "R", url : "/meal" }, (res)=>{
        //console.log("[mealGet] ", res);
        res.sort(function(a,b){
          return a.applyDate > b.applyDate ? -1 : a.applyDate < b.applyDate ?1 : 0;
        });

        this.setState({
          mealList : res,
          active : false
        });
      });
    }

    render() {



      let mealListDisp = this.state.mealList.filter(
        (meal) =>  meal//contact.boardTitle.indexOf(this.props.filterText) !== -1
      );

      let options = [
        {key : '1', text:'1월', value : '1'},
        {key : '2', text:'2월', value : '2'}
      ];

        return(
            <div>

              <Dimmer active={this.state.active} size={'massive'}>
                <Loader />
              </Dimmer>

                <form className="ui form">

                  <div className="field">
                    <Form.Select label="수령월 선택"
                      options={options}
                      placeholder="조회하려는 월을 선택하세요!"/>
                  </div>


                  <button className="ui primary button" type="button"
                    onClick={this.handleMealGet}>조회</button>

              </form>


                {
                  mealListDisp.map(
                    (meal, i) => <MealDetailList key={meal.seqMeal}
                                            applyQty={meal.applyQty}
                                            userInfo={meal.userInfo}
                                            fixedDate={meal.fixedDate}
                                            applyDate={meal.applyDate}
                                            />
                  )
                }

            </div>
        );
    }
}


export default MealList;
