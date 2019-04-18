let Map = require("immutable").Map;
 
let reducer = (state = {
  articles: [{id: 1, title: "Article Title", body: "Body"}]
}, action) => {
  switch (action.type) {
    case "SET_STATE":
      return state;
    case "ADD_ARTICLE":
      let newState = {};
      state.articles.push(action.article);
      newState = state;
      return newState;
  }
  return state;
}
export default reducer;