import React, { Component } from 'react';
import {AnbUtil} from '../../components';
import { Dimmer, Loader } from 'semantic-ui-react';

import MemberList from './MemberList';

/*
const propTypes = {
  memberList : PropTypes.array
};

const defaultProps = {
  memberlist : []
};
*/

// 직원관리 컴포넌트 1
class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
          memberlist : [],
          active : false
        };
        this.handelFind = this.handelFind.bind(this);
    }

    componentDidMount(){
      this.handelFind();
    }

    handelFind(){
      this.setState({active : true});
      AnbUtil.REST({type:'R', url:'/employee'},(res)=>{
        console.log("res", res);
        this.setState({
          memberlist : res,
          active : false
        });
      });
    }

    render() {
        return(
            <div>


            <Dimmer active={this.state.active} size={'massive'}>
              <Loader />
            </Dimmer>

<div className="ui segment">
            <div className="ui form">


            <form className="ui form">
              <h4 className="ui dividing header">Shipping Information</h4>
              <div className="field">
                <label>Name</label>
                <div className="two fields">
                  <div className="field">
                    <input type="text" name="shipping[first-name]" placeholder="First Name"/>
                  </div>
                  <div className="field">
                    <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
                  </div>
                </div>
              </div>
              <div className="field">
                <label>Billing Address</label>
                <div className="fields">
                  <div className="twelve wide field">
                    <input type="text" name="shipping[address]" placeholder="Street Address"/>
                  </div>
                  <div className="four wide field">
                    <input type="text" name="shipping[address-2]" placeholder="Apt #" />
                  </div>
                </div>
              </div>
              <div className="field">
                <label>State</label>
                <select className="ui fluid dropdown">
                  <option value="">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                </select>
              </div>
            </form>


              <div className="field">
                <button className="ui blue button"
                  onClick={this.handleFind}>
                  조회
                </button>
                <button className="ui olive button"
                  onClick={this.handleSave}>
                  저장
                </button>
                </div>
            </div>
</div>

              <MemberList memberlist={this.state.memberlist}/>
            </div>
        );
    }
}

//Member.propTypes = propTypes;
//Member.defaultProps = defaultProps;

export default Member;
