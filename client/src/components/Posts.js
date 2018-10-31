import React, { Component } from 'react';
import postImage from '../images/post.png';
import { NavLink } from 'react-router-dom';
import PostList from './PostList';

class Posts extends Component {
    render() {
        return (
            <div>
                <div className="posts__header">
                    <div className="posts__header--text">
                        <h2 className="heading-secondary">Posts</h2>
                    </div>

                    <div className="posts__header--instructions">
                        <div className="instructions">
                            <h4>How to create a new post</h4>
                            <p>
                                Click on the "Create Post" button and fill out the form.
                                After you submit the post, you will be redirected back
                                 to this pages, and your new post will be displayed here.
                            </p>
                        </div>
                        <div className="instructions">
                            <img src={postImage} alt="socializing" className="composition__photo2" />
                        </div>
                    </div>
                </div>

                <div className="posts__list">
                    <div className="u-center-text posts__list--addPost">
                        <NavLink to="/newpost" className="btn btn--aquamarine">Create Post</NavLink>
                    </div>

                    <div style={{marginTop: "2.5rem"}}>
                        <PostList />
                    </div>
                </div>
            </div>
        );
    }
}

export default Posts;