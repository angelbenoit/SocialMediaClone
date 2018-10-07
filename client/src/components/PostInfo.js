import React, { Component } from 'react';
import CommentList from './CommentList';

class PostInfo extends Component {
    render() {
        return (
            <div className="postInfo">
                <div>
                    <h1 className="heading-secondary">Title</h1>
                    <div className="postInfo__header">
                        <h4>Author Name</h4>
                        <h5>Posted on DATE</h5>
                    </div>
                    <div className="postInfo__body">
                        <p className="paragraph">
                            Lorem ipsum, dolor sit amet
                            consectetur adipisicing elit.
                            Quos, repellendus maxime praesentium
                            blanditiis obcaecati a ab repudiandae
                            harum explicabo, cumque exercitationem
                            recusandae! Cum,
                            commodi veniam nostrum debitis
                            facere expedita? Earum.
                        </p>
                    </div>

                </div>
                <div>
                    <CommentList/>
                </div>
            </div>
        );
    }
}

export default PostInfo;