import React, { Component } from 'react';
import {AnbSelect} from './components';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import RefreshIndicator from 'material-ui/RefreshIndicator';

import AboutDetail from './AboutDetail';

import 'whatwg-fetch';

const API_URL = "http://api.anbtech.net:8080/api/api";

export default class About extends Component {
    constructor(props){
      super(props);


      this.state = {
        boardType : '',
        boardTitle : '',
        boardContents : '',
        datas : [],
        boardTypeArr : [],
        trIndex : -1,
        open : false,
        status : 'hide',
      };

      this.getBoardTypeList = this.getBoardTypeList.bind(this);
      this.getApiData = this.getApiData.bind(this);

      this.selectBoard = this.selectBoard.bind(this);
      this.titleChange = this.titleChange.bind(this);
      this.contentChange = this.contentChange.bind(this);
      this.getAboutCondition = this.getAboutCondition.bind(this);
      this.deleteBoard = this.deleteBoard.bind(this);
    }



    componentDidMount() {
      this.getBoardTypeList();
    }

    selectBoard(value){
      this.setState({boardType : value});
    }

    titleChange(e) {
      this.setState({boardTitle : e.target.value});
    }

    contentChange(e){
      this.setState({boardContents : e.target.value});
    }


    /**
    * 서버단 통신 관련 묶어두기
    * 추후 공통액션으로 분리
    */


    ANBREST = (obj , callfn) => {

      this.setState({
        status : 'loading'
      });

      let cType = obj.type;
      let url = obj.url;
      let param = obj.param;

      switch (cType) {
        case "R":

          fetch(API_URL+url)
          .then((response)=>response.json())
          .then((responseData)=>{
          //  console.log("[rData] : ", responseData);
            callfn(responseData);
            this.setState({status : 'hide'});
          })
          .catch(function(ex){
            console.error(url+" 조회가 실패하였습니다. ", ex);
            this.setState({status : 'hide'});
          });

          break;

        case "C" :

          fetch(url,{
            method : 'post',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body : param
            })
            .then((response) => {
              //this.getApiData();
          //    console.log('saved successfully', response);
              if(response.ok){
                callfn();
                this.setState({status : 'hide'});
              }
            })
            .catch(function(ex){
              console.error(url+" 저장이 실패하였습니다. ", ex);
              this.setState({status : 'hide'});
            });

          break;

        case "D" :
          fetch(url, {
            method : 'delete'
          })
          .then((response)=>{
            callfn();
            this.setState({status : 'hide'});
            //console.log('deleted successfully');
          })
          .catch(function(ex){
            console.error(url+" 저장이 실패하였습니다. ", ex);
            this.setState({status : 'hide'});
          });
          break;

        default:

      }

    };



    /**
    * 게시판 타입 가져오기
    */
    getBoardTypeList(){
      this.ANBREST({type : "R", url : "/boardType"} , (res)=>{
        this.setState({
          boardTypeArr : res
        })
      });
    }

    /**
    * 게시판 조회
    */
    getApiData() {
      this.ANBREST({type : "R", url : "/board" }, (res)=>{
        this.setState({
          datas : res
        })
      });


    }

    /**
    * 게시판 저장
    */
    getAboutCondition(){
      let board = this.state.boardType;
      let title = this.state.boardTitle;
      let content = this.state.boardContents;

      let url = API_URL+'/board';
      let param = JSON.stringify({ "boardType": board, "boardTitle": title , "boardContents" : content });

      this.ANBREST({type:"C", url:url, param:param}, (res)=>{
        this.getApiData();
      });

    }

    deleteBoard(){
      let row = this.state.datas[this.state.trIndex];
    //  console.log("[ selected Row ] : ", row);
      let seqBoard = row.seqBoard;
      let url = API_URL+'/board/'+seqBoard;

      this.ANBREST({type:"D", url : url}, ()=>{
        this.getApiData();
      });

    }

  // common rest api call end


    haneleConfirm= (cType) =>{
      switch (cType) {
        case "D":
          console.log("[delete] : ");
          break;
        default:

      }
    };

    handleOpen = () => {
      this.setState({open: true});
    };

    handleClose = () => {
      this.setState({open: false});
    };

    handleTrSelection = (index) => {
      let selectedKey = index[0];
    //  console.log("[ check ] : ", selectedKey);
      if(selectedKey === undefined){

      }else{
        this.setState({trIndex : selectedKey})
      }

    };


    render() {

      const style = {
        margin : 12
      };


      const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onTouchTap={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              disabled={true}
              onTouchTap={this.handleClose}
            />,
          ];


        return (
          <div>

          <RefreshIndicator
                size={200}
                left={window.innerWidth/2 - 130}
                top={window.innerHeight/2 - 130}
                status={this.state.status}
              />

    <Paper zDepth={2}>
            <AnbSelect
             dataType="board"
             label="게시판"
             onChange={this.selectBoard}/>

             <Divider />

             <TextField
              defaultValue={this.state.boardTitle}
              floatingLabelText="제목"
              onChange={this.titleChange}
            />

   <Divider />

   <TextField
         floatingLabelText="게시판 내용"
         multiLine={true}
         rows={2}
         value={this.boardContents}
         onChange={this.contentChange}
       />

       <Divider />

            <RaisedButton label="조회"
             primary={true} style={style}
             onClick={this.getApiData}
             />

              <RaisedButton label="삭제"
               secondary={true} style={style}
               onClick={this.deleteBoard}
               />

             <RaisedButton label="저장"
               style={style}
              onClick={this.getAboutCondition}
              />


    </Paper>


    <AboutDetail datas={this.state.datas} onRowSelection={this.handleTrSelection}/>


 <Dialog
           title="Dialog With Actions"
           actions={actions}
           modal={false}
           open={this.state.open}
           onRequestClose={this.handleClose}
         >
           The actions in this window were passed in as an array of React objects.
         </Dialog>

          </div>
        );
    }
}
