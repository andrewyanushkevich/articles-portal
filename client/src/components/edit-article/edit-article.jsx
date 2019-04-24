import React, { Component } from 'react';

import { update, ARTICLES_PAGE_URL } from '@src/api/api';
import './edit-article.css';

class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { history } = this.props;

    const article = JSON.stringify({ title: this.state.title, body: this.state.body });

    update(article, history);
  }

  cancel = (event) => {
    event.preventDefault();
    const { history } = this.props;
    history.push(`${ARTICLES_PAGE_URL}/articles`);
  }

  handleInputChange = (event) => {
    event.preventDefault();
    const { target } = event;
    const { name } = target;
    const { value } = target;

    this.setState(() => {
      return { [name]: value };
    });
  }

  render() {
    return (
      <form className="edit-article">
        <div className="edit-article__title">
          <span>Title</span>
          <input name="title" />
        </div>
        <div className="edit-article__body">
          <span>Body</span>
          <input name="body" />
        </div>
        <div>
          <button onClick={e => this.handleSubmit(e)}>OK</button>
          <button onClick={e => this.cancel(e)}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EditArticle;
