import React, { Component, PropTypes } from 'react';
import axios from 'axios';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const API_URL = "http://restnfeel.com:8080/api";

const propTypes = {
 datas : PropTypes.array,
 sortingCd : PropTypes.string,
 onChange : PropTypes.func,
 label : PropTypes.string
};

const defaultProps = {
  datas : [],
  sortingCd : '',
  label : ''
};

class AnbSelect extends Component {

  constructor(prop){
    super(prop);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    datas : [],
    rankValue : null
  };


    componentDidMount() {

      let getApiData = () => {


        const dataType = this.props.dataType;
        let url = '';
        let valueCd = '';
        let textCd = '';
        let sortingCd = '';

        switch (dataType) {
          case 'rank':
            url = API_URL+'/rank';
            valueCd ='rankCode';
            textCd = 'rankName';
            sortingCd = 'rankOrder';
            break;
          case 'board':
            url = API_URL+'/boardType';
            valueCd ='boardType';
            textCd = 'boardTypeNm';
            sortingCd = 'boardTypeNm';
            break;
          case 'project':
            url = API_URL+'/project';
            valueCd ='prjId';
            textCd = 'prjNm';
            sortingCd = 'prjNm';
            break;
          default:

        }


          axios.get(url)
          .then(response => {
           //console.log(response.data);
            let rData = response.data;
            this.setState({
              datas : rData,
              valueCd : valueCd,
              textCd : textCd,
              sortingCd : sortingCd
            });
          });
      };

       getApiData();

   }

 handleChange = (event, index, value) => {
   this.props.onChange(value);
   this.setState({
     rankValue : value
   });
}

    render() {

// 3가지 키 option 1) value/ 2) text 3) sorting Key
      let mapToComponent = (data) => {

          var sCd = this.state.sortingCd;

          data.sort(function(a, b){
            return a[sCd] < b[sCd] ? -1 : a[sCd] > b[sCd] ? 1: 0;
          });

        //  console.log("[check] ", data);

          return  data.map((selData, i)=>{
              var vCode = this.state.valueCd;
              var tCode = this.state.textCd;
            //  console.log(i+" >> ", vCode, selData[vCode]);
              return (
            //    <RankOption
            //     key={i} rankCode={selData[vCode]}
            //     rankName={selData[tCode]} />

                  <MenuItem key={i}
                   value={selData[vCode]}
                   primaryText={selData[tCode]}
                   />

              );
            });
          };


        return(
            <div>
              <SelectField
                floatingLabelText={this.props.label}
                value={this.state.rankValue}
                onChange={this.handleChange}
                >
               {mapToComponent(this.state.datas)}
              </SelectField>
            </div>
        );
    }
}

AnbSelect.propTypes = propTypes;
AnbSelect.defaultProps = defaultProps;

export default AnbSelect;
