import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class PostItem extends Component {

    redirectToPost(id){
        console.log(id)
        this.props.history.push(`/post/${id}`);
    }

    render() {
        return (
            <div className="postItem" onClick={() => this.redirectToPost(this.props.id)}>
                <div className="postItem__title u-center-text"><h1>{this.props.title}</h1></div>
                <div className="postItem__author">
                    <h3>Posted by: <i>{this.props.name}</i></h3>
                    <h5>{this.props.date}</h5>
                </div>
                <div className="postItem__comments u-center-text">
                    <p>{this.props.comments.length} comments</p>
                </div>
            </div>
        );
    }
}

export default withRouter(PostItem);