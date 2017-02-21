import React, { Component, PropTypes } from 'react';
import {AnbUtil} from '../../components';
import MemberList from './MemberList';

const propTypes = {

};

const defaultProps = {

};

class Member extends Component {

    constructor(props) {
        super(props);
        this.state = {
          memberlist : []
        };
        this.handelFind = this.handelFind.bind(this);
    }

    componentDidMount(){
      this.handelFind();
    }

    handelFind(){
      AnbUtil.REST({type:'R', url:'/employee'},(res)=>{
        console.log("res", res);
        this.setState({
          memberlist : res
        });
      });
    }

    render() {
        return(
            <div>
              <MemberList memberlist={this.state.memberlist}/>
            </div>
        );
    }
}

Member.propTypes = propTypes;
Member.defaultProps = defaultProps;

export default Member;
