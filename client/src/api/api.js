import store from '../store';
import { addArticle, updateArticle } from '../actions/actions';

export function add(article, history) {
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

export function update(article, history) {
  fetch('http://localhost:8080/v1/articles/:id', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
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
    store.dispatch(updateArticle(jsonResponse));
    history.push('/articles');
  });
}
