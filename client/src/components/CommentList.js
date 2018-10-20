import React, { Component } from 'react';
import CommentItem from './CommentItem';
import * as actions from '../Actions';
import { connect } from 'react-redux';

class CommentList extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

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

function mapStateToProps(state) {
    return {
        user: state.auth
    }
}

export default connect(mapStateToProps, actions)(CommentList);