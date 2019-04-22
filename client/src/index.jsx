import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Redirect } from 'react-router';


import Header from './components/header/header';
import List from './components/article-list/article-list';
import CreateArticle from './components/create-article/create-article';
import EditArticle from './components/edit-article/edit-article';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/articles" component={List} />
        <Route exact path="/articles/create" component={CreateArticle} />
        <Route path="/articles/:id/edit" component={EditArticle} />
        <Redirect from="/" to="/articles" />
      </Switch>
    </BrowserRouter>
  </Provider>, document.body,
);
