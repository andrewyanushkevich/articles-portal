import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Redirect } from "react-router";

import "./index.css";
import Header from "./App/Header";
import List from "./App/List";
import CreateArticle from "./App/Pages/createArticle";
import EditArticle from "./App/Pages/editArticle"; 
import reducer from "./App/reducer";

const initialState = {
	articles: [{id: 1, title: "Article Title", body: "Body"}]
};
const store = createStore(reducer, initialState);


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Header />
        <Switch>
				<Route exact path="/articles" component={List} />
				<Route exact path="/articles/create" component={CreateArticle} />
				<Route exact path="/articles/edit/:id" component={EditArticle} />
				<Redirect from ="/" to= "/articles" />
			</Switch>
		</BrowserRouter>
	</Provider>
	, document.getElementById("component"));
export  { store };


