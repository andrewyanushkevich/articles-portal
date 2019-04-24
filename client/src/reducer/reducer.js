const ADD_ARTICLE = 'ADD_ARTICLE';
const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

const reducer = (state, action) => {
  let newState = {};
  switch (action.type) {
  case ADD_ARTICLE:
    state.articles.push(action.article);
    newState = state;
    return newState;
  case UPDATE_ARTICLE:
    state.article.find((element) => element._id === action.article._id);
  default: return state;
  }
};
export { ADD_ARTICLE, UPDATE_ARTICLE, reducer };

