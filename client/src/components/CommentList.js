import React, { Component } from 'react';
import CommentItem from './CommentItem';

class CommentList extends Component {
    render() {
        return (
            <div className="comment__list">
                <h5>Comments:</h5>
                <CommentItem/>
                <CommentItem/>
                <CommentItem/>
            </div>
        );
    }
}

export default CommentList;