import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import * as actions from '../Actions';

class PostInfo extends Component {
    componentWillMount() {
        this.props.fetchUser();
        this.props.fetchSpecifiedPostData(this.props.match.params.id);
    }

    deletePost(id){
        axios.post('/api/removepost', {id})
             .then(this.props.fetchPosts())
             .then(this.props.history.push("/posts"))
    }

    loadPost() {
        if (this.props.postInfo && this.props.userInfo) {
            let data = this.props.postInfo;
            return (
                <div className="postInfo">
                    <div>
                        <h1 className="heading-secondary">{data.title}</h1>
                        <div className="postInfo__header">
                            <h4>By {data.author}</h4>
                            <h5>Posted on {data.date}</h5>
                        </div>
                        {
                            this.props.userInfo.email === this.props.postInfo.author ?
                            <button
                                className="btn_nonlink btn_nonlink--aquamarine"
                                onClick={() => this.deletePost(this.props.postInfo._id)}
                            >
                                Delete Post
                            </button> : ""
                        }
                        <div className="postInfo__body">
                            <p className="paragraph">
                                {data.body}
                            </p>
                            <NavLink to="/posts" className="btn btn--aquamarine">&larr; Back</NavLink>
                        </div>

                    </div>
                    <div>
                        <CommentForm
                            postId={this.props.match.params.id}
                        />
                    </div>
                    <div>
                        <CommentList
                            comments={this.props.postInfo.comments}
                            postId={this.props.postInfo._id}
                        />
                    </div>
                </div>
            );
        }
        else{
            return(
                <div className="postInfo">
                    Cannot find post
                </div>
            )
        }
    }

    render() {
        return this.loadPost();
    }
}

function mapStateToProps(state) {
    return {
        postInfo: state.postInfo,
        userInfo: state.user
    }
}

export default withRouter(connect(mapStateToProps, actions)(PostInfo));