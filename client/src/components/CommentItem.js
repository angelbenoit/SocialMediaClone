import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import * as actions from '../Actions';

class CommentItem extends Component {
    deleteComment(postId, commentId){
        axios.post('/api/removecomment', {postId, commentId})
             .then(this.props.fetchPosts())
             .then(this.props.fetchSpecifiedPostData(this.props.postId))
        this.props.fetchPosts();
    }

    render() {
        return (
            <div className="comment">
                <div className="comment__header">
                    <h4>{this.props.userName}</h4>
                    <h5>{this.props.date}</h5>
                </div>
                <div>
                    <p>
                        {this.props.comment}
                    </p>
                </div>
                {
                    this.props.delete ?
                    <div>
                        <button
                            className="btnComment"
                            onClick={() => this.deleteComment(this.props.postId, this.props.commentId)}
                        >
                            Delete
                        </button>
                    </div> : ""
                }
            </div>
        );
    }
}

export default connect(null, actions)(CommentItem);