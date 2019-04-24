import store from '@src/store';
import { addArticle, updateArticle } from '../actions/actions';

export const ARTICLES_PAGE_URL = '/articles';

export function add(article, history) {
  fetch('http://localhost:8080/v1/article', {
    method: 'POST',
    headers: { 'Accept-Encoding': 'gzip' },
    body: article,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Article has not been added' );
  }, (networkError) => {
    alert(networkError.message);
  }).then((jsonResponse) => {
    store.dispatch(addArticle(jsonResponse));
    history.push(ARTICLES_PAGE_URL);
  });
}

export function update(article, history) {
  fetch('http://localhost:8080/v1/articles/:id', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: article,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Article has not been updated!');
  }, (networkError) => {
    alert(networkError.message);
  }).then((jsonResponse) => {
    store.dispatch(updateArticle(jsonResponse));
    history.push('/articles');
  });
}
