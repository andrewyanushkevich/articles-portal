import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { withRouter } from 'react-router-dom';
import { store } from "../../index"
import {updateArticle} from '../actions';
import { connect } from 'react-redux';

class EditArticle extends Component {
    constructor(props){
        super(props);

        this.editBtn = this.editBtn.bind(this);
        this.cancelBtn = this.cancelBtn.bind(this);
    }
    editBtn(e){
        let history = this.props.history;
        e.preventDefault();
        let createArticleForm = document.forms["editArticleForm"];
        let title = createArticleForm.elements["title"].value;
        let body = createArticleForm.elements["body"].value;
        let article = JSON.stringify({title: title, body: body});
        let xhttp = new XMLHttpRequest();
        let url = "../../article";
        xhttp.open("PUT", url, true);
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.addEventListener("load", function () {
            console.log(xhttp.response);
            store.dispatch(updateArticle({title: title, body: body}));
            history.push("/articles");
        });
    }
    cancelBtn(e){
        e.preventDefault();
        this.props.history.push('/articles');
    }
    render(){
        return(
            <form name="editArticleForm">
                <div>
                    <span>Title</span>
                    <input name="title"></input>
                </div>
                <div>
                    <span>Body</span>
                    <input name="body"></input>
                </div>
                <div>
                    <button onClick={this.editbtn}>OK</button>
                    <button onClick={this.cancelBtn}>Cancel</button>
                </div>
            </form>
        )
    }
}

export default EditArticle;