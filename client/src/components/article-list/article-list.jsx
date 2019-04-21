/* eslint-disable no-tabs */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '../article/article';

export class List extends Component {
  constructor(props) {
    super(props);

    this.createBtn = this.createBtn.bind(this);
  }

  createBtn() {
    this.props.history.push('/articles/create');
  }

  render() {
    return (
      <div>
  			<div className="create-btn">
  				<button className="btn btn-outline-dark" onClick={this.createBtn}>Create</button>
				</div>
  		<div>
  			{this.props.articles.map(item => (
  				<Article
  					id={item.id}
						title={item.title}
						body={item.body}
						history={this.props.history}
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
