import { ADD_ARTICLE } from '/reducer/reducer';

const addArticle = article => ({
  type: ADD_ARTICLE,
  article,
});
const updateArticle = article => ({
  type: 'UPDATE_ARTICLE',
  article,
});

export { addArticle, updateArticle };
