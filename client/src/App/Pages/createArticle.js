import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';
import { store } from "../../index"
import {addArticle} from '../actions';
import { connect } from 'react-redux';


class Create extends  Component {
    constructor(props){
        super(props);

        this.createBtn = this.createBtn.bind(this);
        this.cancelBtn = this.cancelBtn.bind(this);
    }

    createBtn(e){
        let history = this.props.history;
        e.preventDefault();
        let createArticleForm = document.forms["createArticleForm"];
        let _title = createArticleForm.elements["title"].value;
        let _body = createArticleForm.elements["body"].value;
        let article = new FormData();
        article.append("json", JSON.stringify({title: _title, body: _body}))
        /*let xhttp = new XMLHttpRequest();
        let url = "../../article";
        xhttp.open("POST", url, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.addEventListener("load", function () {
            console.log(xhttp.response);
            store.dispatch(addArticle({title: title, body: body}));
            history.push("/articles");
        });
        xhttp.send(article);*/
        fetch('http://localhost:8080/article', {
            method: 'POST',
            mode: 'no-cors',
            headers: new Headers({"Content-Type": "application/json"}),
            body: article
            }).then(response => {
            if(response.ok){
            return response.json()
        }
            throw new Error('Request failed!');
        }, networkError => {
        console.log(networkError.message)
        }).then(jsonResponse => {
            console.log(jsonResponse);
            store.dispatch(addArticle(jsonResponse));
            history.push("/articles");
        })
    }

    cancelBtn(e){
        e.preventDefault();
        this.props.history.push('/articles');
    }

    render(){
        return (
            <form name="createArticleForm">
                <div>
                    <span>Title</span>
                    <input name="title"></input>
                </div>
                <div>
                    <span>Body</span>
                    <input name="body"></input>
                </div>
                <div>
                    <button onClick={this.createBtn}>OK</button>
                    <button onClick={this.cancelBtn}>Cancel</button>
                </div>
            </form>
        );
    }
}
function mapStateToProps(state) {
    return {
      articles: state.get("articles")
    };
  }
connect(mapStateToProps)(Create)
export default withRouter(Create);