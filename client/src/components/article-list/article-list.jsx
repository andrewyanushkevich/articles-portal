import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '@src/components/article/article';
import './article-list.css';
import { ARTICLES_PAGE_URL } from '@src/api/api';

export class List extends Component {
  constructor(props) {
    super(props);
  }

  createArticle() {
    const { history } = this.props;
    history.push(`${ARTICLES_PAGE_URL}/create`);
  }
  
  render() {
    const { history, articles } = this.props;
    return (
      <div className="article-list">
        <div className="create-btn">
          <button onClick={() => this.createArticle()} type="button">Create</button>
        </div>
        <div>
          {articles.map(item => (
            <Article
              article={item}
              history={history}
            />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles,
  };
}

export default connect(mapStateToProps)(List);
