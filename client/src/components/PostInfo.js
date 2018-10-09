import React, { Component } from 'react';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class PostInfo extends Component {
    componentWillMount() {
        this.props.fetchSpecifiedPostData(this.props.match.params.id);
    }

    loadPost() {
        if (this.props.postInfo) {
            let data = this.props.postInfo;
            return (
                <div className="postInfo">
                    <div>
                        <h1 className="heading-secondary">{data.title}</h1>
                        <div className="postInfo__header">
                            <h4>By {data.author}</h4>
                            <h5>Posted on {data.date}</h5>
                        </div>
                        <div className="postInfo__body">
                            <p className="paragraph">
                                {data.body}
                            </p>
                        </div>

                    </div>
                    <div>
                        <CommentList />
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
        postInfo: state.postInfo
    }
}

export default connect(mapStateToProps, actions)(PostInfo);