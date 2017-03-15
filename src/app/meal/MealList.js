import React, { Component } from 'react';

import {AnbUtil} from '../../components';

import MealDetailList from './MealDetailList';

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
      AnbUtil.REST({type : "R", url : "/meal" }, (res)=>{
        //console.log("[mealGet] ", res);
        this.setState({
          mealList : res
        });
      });
    }

    render() {



      let mealListDisp = this.state.mealList.filter(
        (meal) =>  meal//contact.boardTitle.indexOf(this.props.filterText) !== -1
      );

        return(
            <div>
                <h2 className="ui header">개인 식권 신청현황</h2>


                <form className="ui form">
                  <button className="ui button" type="button" onClick={this.handleMealGet}>조회</button>
                </form>

                <table className="ui olive table">
                  <thead>
                    <tr>
                      <th>신청자</th>
                      <th>신청매수</th>
                      <th>신청일자</th>
                      <th>수령일자</th>
                    </tr>
                  </thead>

                  <tbody>
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
                </tbody>
              </table>


            </div>
        );
    }
}


export default MealList;
