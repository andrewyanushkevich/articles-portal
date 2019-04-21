import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import store from '../../store';
import { addArticle } from '../../actions/actions';


class Create extends Component {
  constructor(props) {
    super(props);
    this.createBtn = this.createBtn.bind(this);
    this.cancelBtn = this.cancelBtn.bind(this);
  }

  createBtn(e) {
    const history = this.props.history;
    e.preventDefault();
    const { createArticleForm } = document.forms;
    const articleTitle = createArticleForm.elements.title.value;
    const articleBody = createArticleForm.elements.body.value;
    const article = JSON.stringify({ title: articleTitle, body: articleBody });
    fetch('http://localhost:8080/v1/article', {
      method: 'POST',
      headers: { 'Accept-Encoding': 'gzip' },
      body: article,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Request failed!');
    }, (networkError) => {
      console.log(networkError.message);
    }).then((jsonResponse) => {
      console.log(jsonResponse);
      store.dispatch(addArticle(jsonResponse));
      history.push('/articles');
    });
  }

  cancelBtn(e) {
    e.preventDefault();
    this.props.history.push('/articles');
  }

  render() {
    return (
      <form name="createArticleForm">
        <div>
          <span>Title</span>
          <input name="title" />
        </div>
        <div>
          <span>Body</span>
          <input name="body" />
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
