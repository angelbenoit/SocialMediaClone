import React, { Component } from 'react';
import postImage from '../images/post.png';

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
                               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                               Unde, consectetur molestias. Sunt nobis, excepturi quam
                               dolores voluptates rem vitae, corporis
                               iste ratione nostrum, assumenda earum sed id cum in quaerat
                            </p>
                        </div>
                        <div className="instructions">
                            <img src={postImage} alt="socializing" className="composition__photo2" />
                        </div>
                    </div>
                </div>

                <div className="posts__list">
                </div>
            </div>
        );
    }
}

export default Posts;