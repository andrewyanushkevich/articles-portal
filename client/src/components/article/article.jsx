import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Button, Container } from 'reactstrap';

import View from '@src/components/view-article/view';
import './article.css';
import { ARTICLES_PAGE_URL } from '@src/api/api';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  editArticle(e) {
    e.preventDefault();
    const { history, article } = this.props;
    history.push(`${ARTICLES_PAGE_URL}/${article._id}/edit`);
  }

  render() {
    const { article } = this.props;

    return (
      <div className="article">
        <div className="article__id">{article._id}</div>
        <div className="article__title">{article.title}</div>
        <div className="article__body">{article.body}</div>
        <div className="article__buttons">
          <Container>
            <Button onClick={e => this.editArticle(e)} type="button">Edit</Button>
          </Container>
          <Container>
            <View buttonLabel="view" article={article} />
          </Container>
        </div>
      </div>
    );
  }
}

export default Article;
