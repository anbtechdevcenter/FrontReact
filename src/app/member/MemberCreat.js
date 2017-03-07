import React, { Component, PropTypes } from 'react';

const propTypes = {

};

const defaultProps = {

};

class MemberCreat extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>

              <div className="ui segment">
                          <div className="ui form">

                          <form className="ui form">
                            <h4 className="ui dividing header">직원 등록</h4>
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


            </div>
        );
    }
}

MemberCreat.propTypes = propTypes;
MemberCreat.defaultProps = defaultProps;

export default MemberCreat;
