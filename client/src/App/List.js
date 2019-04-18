import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import "./App.css";
import { Container } from "reactstrap";
import View  from "./Pages/view";

class Article extends Component {
	constructor(props){
		super(props);
		this.editBtn = this.editBtn.bind(this);
	}
	editBtn(){
		this.props.history.push("/articles/edit/:id="+"1");
	}
	viewBtn(){
		ReactDOM.render(<View />, document.body);
	}
	render() {
		return (
  <div>
  <p>{this.props.id}</p>
  <p>{this.props.title}</p>
  <p>{this.props.body}</p>
  <button onClick={this.editBtn}>Edit</button>
  <Container>
  <View buttonLabel="view" />
				</Container>
			</div>
		);
	}
}

export class List extends Component {
	constructor(props){
		super(props);

		this.createBtn = this.createBtn.bind(this);
	}

	createBtn(){
		this.props.history.push("/articles/create");
	}
    
	render(){
		return (
  <div>
  <div className="create-btn">
  <button className="btn btn-outline-dark" onClick={this.createBtn}>Create</button>
				</div>
  <div>
  {this.props.articles.map(item => (
<Article id={item.id}
							title={item.title}
							body={item.body}
							history={this.props.history}/>
))}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		articles: state.articles
	};
}
 
export default connect(mapStateToProps)(List) ; 

