import React, { Component } from 'react';
import store from '../../store';
import { updateArticle } from '../../actions/actions';

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
    const xhttp = new XMLHttpRequest();
    const url = '../../article';
    xhttp.open('PUT', url, true);
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.addEventListener('load', () => {
      console.log(xhttp.response);
      store.dispatch(updateArticle({ title, body }));
      history.push('/articles');
    });
  }

  cancelBtn(e) {
    e.preventDefault();
    this.props.history.push('/articles');
  }

  render() {
    return (
      <form name="editArticleForm">
        <div>
          <span>Title</span>
          <input name="title" />
        </div>
        <div>
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
