import React, { Component, PropTypes } from 'react';


import {Modal,Button} from 'react-bootstrap';

class AnbModal extends Component {

    constructor(props) {
        super(props);
    }


    render() {
      
        return(
            <div>

              <Modal show={this.props.show}>
                  <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    {this.props.message}
                  </Modal.Body>

                  <Modal.Footer>
                    <Button bsStyle="primary" onClick={this.props.handleOk}>저장</Button>
                    <Button onClick={this.props.handleClose}>닫기</Button>
                  </Modal.Footer>

                </Modal>

            </div>
        );
    }
}


export default AnbModal;
