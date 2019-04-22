import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { add } from '../../api/api';
import './create-article.css';

class Create extends Component {
  constructor(props) {
    super(props);

    this.createBtn = this.createBtn.bind(this);
    this.cancelBtn = this.cancelBtn.bind(this);
  }

  createBtn(e) {
    e.preventDefault();

    const history = this.props.history;
    const { createArticleForm } = document.forms;
    const articleTitle = createArticleForm.elements.title.value;
    const articleBody = createArticleForm.elements.body.value;
    const article = JSON.stringify({ title: articleTitle, body: articleBody });

    add(article, history);
  }

  cancelBtn(e) {
    e.preventDefault();
    this.props.history.push('/articles');
  }

  render() {
    return (
      <form name="createArticleForm" className="create-article-form">
        <div className="create-article-title">
          <p>Title</p>
          <input name="title" />
        </div>
        <div className="create-article-body">
          <p>Body</p>
          <textarea name="body" />
        </div>
        <div>
          <button onClick={this.createBtn}>OK</button>
          <button onClick={this.cancelBtn}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default withRouter(Create);
