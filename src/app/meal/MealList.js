import React, { Component } from 'react';

import {AnbUtil} from '../../components';
import { Dimmer, Loader } from 'semantic-ui-react';
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

        return(
            <div>

              <Dimmer active={this.state.active} size={'massive'}>
                <Loader />
              </Dimmer>

                <form className="ui form">
                  <button className="ui primary button" type="button" onClick={this.handleMealGet}>조회</button>
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
