let addArticle =  (article) => {
    return {
      type: "ADD_ARTICLE",
      article
    }
};
let updateArticle =  (article) => {
    return {
      type: "UPDATE_ARTICLE",
      article
    }
};

export {addArticle, updateArticle};