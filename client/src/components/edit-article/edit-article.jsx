import React, { Component } from 'react';

import { update } from '../../api/api';
import './edit-article.css';

class EditArticle extends Component {
  constructor(props) {
    super(props);

    this.editBtn = this.editBtn.bind(this);
    this.cancelBtn = this.cancelBtn.bind(this);
  }

  editBtn(e) {
    const { history } = this.props;
    e.preventDefault();
    const createArticleForm = document.forms.editArticleForm;
    const title = createArticleForm.elements.title.value;
    const body = createArticleForm.elements.body.value;
    const article = JSON.stringify({ title, body });

    update(article, history);
  }

  cancelBtn(e) {
    e.preventDefault();
    this.props.history.push('/articles');
  }

  render() {
    return (
      <form name="editArticleForm" className="edit-article-form">
        <div className="edit-article-title">
          <span>Title</span>
          <input name="title" />
        </div>
        <div className="edit-article-body">
          <span>Body</span>
          <input name="body" />
        </div>
        <div>
          <button onClick={this.editbtn}>OK</button>
          <button onClick={this.cancelBtn}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default EditArticle;
