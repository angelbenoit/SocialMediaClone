import React, { Component } from 'react';
import axios from 'axios';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class PostInfo extends Component {
    componentWillMount() {
        this.props.fetchSpecifiedPostData(this.props.match.params.id);
    }

    deletePost(id){
        axios.post('/api/removepost')
    }

    loadPost() {
        if (this.props.postInfo && this.props.userInfo) {
            {console.log(this.props.postInfo.authorId, this.props.userInfo.googleId)}
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
                            this.props.userInfo.googleId === this.props.postInfo.authorId ?
                            <button
                                className="btn_nonlink btn_nonlink--aquamarine"
                                onClick={this.deletePost}
                            >
                                Delete Post
                            </button> : ""
                        }
                        <div className="postInfo__body">
                            <p className="paragraph">
                                {data.body}
                            </p>
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
        userInfo: state.auth
    }
}

export default connect(mapStateToProps, actions)(PostInfo);