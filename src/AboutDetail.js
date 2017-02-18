import React, { Component } from 'react';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';



class AboutDetail extends Component {

    /**
    * table render
    */
    getBoardList = (data) => {
      //console.log("getBoardList ",data);
      return data.map((selData, i) => {
        let type = selData.boardType;
        let title = selData.boardTitle;
        let content = selData.boardContents;
        return (
          <TableRow key={i} >
            <TableRowColumn>{type}</TableRowColumn>
            <TableRowColumn>{title}</TableRowColumn>
            <TableRowColumn>{content}</TableRowColumn>
          </TableRow>
        );
      });
    }

    render() {
        return(
            <div>

              <Table onRowSelection={this.props.onRowSelection}>
               <TableHeader>
                 <TableRow>
                   <TableHeaderColumn>ID</TableHeaderColumn>
                   <TableHeaderColumn>Name</TableHeaderColumn>
                   <TableHeaderColumn>Status</TableHeaderColumn>
                 </TableRow>
               </TableHeader>
               <TableBody>
                   {this.getBoardList(this.props.datas)}
               </TableBody>
             </Table>

            </div>
        );
    }
}


export default AboutDetail;
