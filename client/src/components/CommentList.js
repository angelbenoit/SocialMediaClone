import React, { Component } from 'react';
import CommentItem from './CommentItem';
import * as actions from '../Actions';

class CommentList extends Component {
    renderComments(){
        if(this.props.comments && this.props.comments.length > 0){
            const commentList = [];
            this.props.comments.forEach(comment => {
                commentList.push(
                    <CommentItem
                        userName={comment.user}
                        comment={comment.comment}
                        date={comment.date}
                    />
                )
            })
            return commentList;
        }
        else
            return (
                <h1>No Comments Yet</h1>
            )
    }
    render() {
        return (
            <div className="comment__list">
                <h5>Comments:</h5>
                {this.renderComments()}
            </div>
        );
    }
}

export default CommentList;