import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return (
            <div className="postItem">
                <div className="postItem__title u-center-text"><h1>{this.props.title}</h1></div>
                <div className="postItem__author">
                    <p>Rating: {(Math.random() * 1000).toFixed(0)}</p>
                    <h3>Posted by: <i>{this.props.name}</i></h3>
                    <h5>{new Date().toDateString()}</h5>
                </div>
                <div className="postItem__comments u-center-text">
                    <p>{(Math.random() * 1000).toFixed(0)} comments</p>
                </div>
            </div>
        );
    }
}

export default PostItem;