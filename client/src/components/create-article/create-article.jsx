import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { add, ARTICLES_PAGE_URL } from '@src/api/api';
import './create-article.css';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { history } = this.props;
    
    const article = JSON.stringify({ title: this.state.title, body: this.state.body });

    add(article, history);
  }

  cancel = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(ARTICLES_PAGE_URL);
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
      <form className="create-article">
        <div className="create-article__title">
          <p>Title</p>
          <input name="title" onInput={this.handleInputChange} />
        </div>
        <div className="create-article__body">
          <p>Body</p>
          <textarea name="body" onInput={this.handleInputChange} />
        </div>
        <div>
          <button onClick={e => this.handleSubmit(e)}>OK</button>
          <button onClick={e => this.cancel(e)}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default withRouter(Create);
