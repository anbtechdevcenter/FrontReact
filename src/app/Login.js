import React, { Component } from 'react';



class Login extends Component {
/*
    constructor(props) {
        super(props);
    }
*/

    render() {
        return(
            <div>
              <form className="ui form">
                <div className="field">
                  <label>아이디</label>
                  <input type="text" name="first-name" placeholder="사용자 아이디" />
                </div>
                <div className="field">
                  <label>패스워드</label>
                  <input type="password" name="last-name" placeholder="패스워드" />
                </div>

                <button className="ui button" type="submit">로그인</button>


              <div className="field">
                <div className="ui segment">
                  <p>
                    SKHynix에서 상주하는 에이앤비테크 직원의 원할한 신권 신청을 위해 만들어진 App입니다.<br/>
                    사용상 불편사항 또는 건의사항은 의견주시면 적극 반영하도록 하겠습니다.
                  </p>
                </div>
              </div>

              <div className="ui cards">
                <div className="card">
                  <div className="content">
                    <img className="right floated mini ui image" role="presentation" src="/images/project-1.jpg"/>
                    <div className="header">
                      Seo Jeong Hwan
                    </div>
                    <div className="meta">
                      Project Director
                    </div>
                    <div className="description">
                      어플리케이션은 React Js로 구현되었습니다.
                    </div>
                  </div>
                  <div className="extra content">
                    <div className="ui two buttons">
                      <div className="ui basic green button">Approve</div>
                      <div className="ui basic red button">Decline</div>
                    </div>
                  </div>
                </div>
              </div>

                </form>
            </div>
        );
    }
}


export default Login;
