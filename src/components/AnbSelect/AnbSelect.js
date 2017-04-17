import React, { Component, PropTypes } from 'react';
import AnbUtil from '../AnbUtil';

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
            url = '/rank';
            valueCd ='rankCode';
            textCd = 'rankName';
            sortingCd = 'rankOrder';
            break;
          case 'board':
            url = '/boardType';
            valueCd ='boardType';
            textCd = 'boardTypeNm';
            sortingCd = 'boardTypeNm';
            break;
          case 'project':
            url = '/project';
            valueCd ='prjId';
            textCd = 'prjNm';
            sortingCd = 'prjNm';
            break;
          default:

        }

        AnbUtil.REST( {'type' : 'R', 'url' : url}, (response)=>{
          let rData = response;
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

 handleChange = (event) => {
   let value = event.target.value;
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

                  <option key={i}
                   value={selData[vCode]}
                   >
                   {selData[tCode]}
                 </option>

              );
            });
          };


        return(
            <div>
              <select className="ui dropdown"
                onChange={this.handleChange}
                >
                  {mapToComponent(this.state.datas)}
                </select>
            </div>
        );
    }
}

AnbSelect.propTypes = propTypes;
AnbSelect.defaultProps = defaultProps;

export default AnbSelect;
