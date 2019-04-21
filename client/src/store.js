import { createStore } from 'redux';
import reducer from './reducer/reducer';

const initialState = {
  articles: [{ id: 1, title: 'Article Title', body: 'Body' }],
};
const store = createStore(reducer, initialState);

export default store;
