import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'reactstrap';
import View from '../view-article/view';

class Article extends Component {
  constructor(props) {
    super(props);
    this.editBtn = this.editBtn.bind(this);
    this.viewBtn = this.viewBtn.bind(this);
  }

  editBtn() {
    this.props.history.push('/articles/edit/:id=1');
  }

  viewBtn() {
    ReactDOM.render(<View />, document.body);
  }

  render() {
    return (
      <div>
        <p>{this.props.id}</p>
        <p>{this.props.title}</p>
        <p>{this.props.body}</p>
        <button onClick={this.editBtn}>Edit</button>
        <Container>
          <View buttonLabel="view" />
        </Container>
      </div>
    );
  }
}

export default Article;
