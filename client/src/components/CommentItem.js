import React, { Component } from 'react';

class CommentItem extends Component {
    render() {
        return (
            <div className="comment">
                <div className="comment__header">
                    <h4>Name</h4>
                    <h5>Date Posted</h5>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                        Rem, voluptatem? Vel assumenda,
                        nihil iste tenetur molestias
                        nulla eum omnis aspernatur
                        blanditiis! Consectetur, nesciunt
                        ex dignissimos aperiam esse fugiat
                        recusandae similique.
                    </p>
                </div>
            </div>
        );
    }
}

export default CommentItem;