import React, { Component } from 'react';
import {
  Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';

class View extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modal: false,
    };
  }

  toggle() {
    this.setState(state => ({ modal: !state.modal }));
  }

  render() {
    const { article } = this.props;

    return (
      <div>
        <div>
          <Button color="info" onClick={() => this.toggle()}>View</Button>
        </div>
        <Modal isOpen={this.state.modal} size="lg">
          <div>
            <ModalHeader>{article.title}</ModalHeader>
            <ModalBody>
              {article.body}
            </ModalBody>
            <ModalFooter>
              <span>
                created at:
                {` ${article.createdAt.toLocaleString()}`}
              </span>
              <span>
                updated at:
                {` ${article.unpdatedAt.toLocaleString()}`}
              </span>
              <Button onClick={() => this.toggle()}>
                  Close
              </Button>
            </ModalFooter>
          </div>
        </Modal>
      </div>
    );
  }
}

export default View;
