const ADD_ARTICLE = 'ADD_ARTICLE';
const UPDATE_ARTICLE = 'UPDATE_ARTICLE';

const reducer = (state, action) => {
  let newState = {};
  switch (action.type) {
  case ADD_ARTICLE:
    state.articles.push(action.article);
    newState = state;
    return newState;
<<<<<<< HEAD
  case UPDATE_ARTICLE:
    state.article.find((element) => element._id === action.article._id);
  default: return state;
  }
};
export { ADD_ARTICLE, UPDATE_ARTICLE, reducer };

=======
  default: return state;
  }
};

export { ADD_ARTICLE, reducer };
>>>>>>> 18a49387e9c7eb0b92bb7136c28e28db893e3bdd
