import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class PostFormButton extends Component {
    redirectPage(){
        this.context.history.push('/posts')
    }
    render() {
        return (
            <button
                type="submit"
                className="btn_nonlink btn_nonlink--white u-center-text formSubmit"
                onClick={this.redirectPage}
            >
                Post
            </button>
        );
    }
}

export default withRouter(PostFormButton);