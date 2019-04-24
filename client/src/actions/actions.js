import { ADD_ARTICLE, UPDATE_ARTICLE } from '@src/reducer/reducer';

const addArticle = article => ({
  type: ADD_ARTICLE,
  article,
});
const updateArticle = article => ({
  type: UPDATE_ARTICLE,
  article,
});

export { addArticle, updateArticle };
