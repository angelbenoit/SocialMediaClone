import React, { Component } from 'react';

class PostItem extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>By {this.props.name}</h2>
            </div>
        );
    }
}

export default PostItem;