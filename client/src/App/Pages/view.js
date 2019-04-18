import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



class View extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.toggle = this.toggle.bind(this);
    
        this.state = {
          modal: false,
        };
      }
    
      toggle(){
        this.setState({
          modal: !this.state.modal
        });
      }
      render() {
        return (
          <div>
          <Button color="danger" onClick={this.toggle}>View</Button>
            <Modal isOpen={this.state.modal}>
            <div>
              <ModalHeader > Article</ModalHeader>
              <ModalBody>
                Woohoo, you're reading this text in a modal!
                </ModalBody>
              <ModalFooter>
                <Button  onClick={this.toggle}>
                  Close
                </Button>
                <Button  onClick={this.toggle}>
                  Save Changes
                </Button>
              </ModalFooter>
              </div>
            </Modal>
          </div>
        );
      }
}

export default View;