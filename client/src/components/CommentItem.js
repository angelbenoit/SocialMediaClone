import React, { Component } from 'react';

class CommentItem extends Component {
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
            </div>
        );
    }
}

export default CommentItem;