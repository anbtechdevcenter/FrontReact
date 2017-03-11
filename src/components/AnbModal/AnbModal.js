import React, { Component, PropTypes } from 'react';


import {Modal,Button} from 'react-bootstrap';

class AnbModal extends Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
      console.log("click");
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
                    <Button onClick={this.props.handleClose}>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                  </Modal.Footer>

                </Modal>

            </div>
        );
    }
}


export default AnbModal;
