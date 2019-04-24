import { createStore } from 'redux';
import { reducer } from '@src/reducer/reducer';

const initialState = {
  articles: [],
};

const store = createStore(reducer, initialState);

export default store;
