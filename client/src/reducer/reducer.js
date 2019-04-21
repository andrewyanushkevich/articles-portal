const SET_STATE = 'SET_STATE';
const ADD_ARTICLE = 'ADD_ARTICLE';
let newState = {};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_STATE:
      return state;
    case ADD_ARTICLE:
      state.articles.push(action.article);
      newState = state;
      return newState;
    default: return state;
  }
};
export default reducer;
