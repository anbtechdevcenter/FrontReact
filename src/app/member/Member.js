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

// 직원관리 컴포넌트 11
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


              <MemberList memberlist={this.state.memberlist}/>
            </div>
        );
    }
}

//Member.propTypes = propTypes;
//Member.defaultProps = defaultProps;

export default Member;
