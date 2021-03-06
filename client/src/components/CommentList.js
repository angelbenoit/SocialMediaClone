import React, { Component } from 'react';
import CommentItem from './CommentItem';
import * as actions from '../Actions';
import { connect } from 'react-redux';

class CommentList extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    renderComments(){
        if(this.props.user && this.props.comments && this.props.comments.length > 0){
            const commentList = [];
            this.props.comments.forEach(comment => {
                commentList.push(
                    <CommentItem
                        key={`${comment.user}${comment.date}`}
                        userName={comment.user}
                        comment={comment.comment}
                        date={comment.date}
                        delete={this.props.user.googleId === comment.authorId}
                        commentId={comment._id}
                        postId={this.props.postId}
                    />
                )
            })
            return commentList;
        }
        else
            return (
                <h1 key="no-comment">No Comments Yet</h1>
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

function mapStateToProps(state) {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, actions)(CommentList);