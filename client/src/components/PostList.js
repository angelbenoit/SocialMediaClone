import React, { Component } from 'react';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class PostList extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    getPosts(){
        let Posts = [];
        if(this.props.postList && this.props.postList.length > 0)
            Posts = this.props.postList.map(item => {
                return <PostItem
                    name={item.author}
                    title={item.title}
                    comments={item.comments}
                    date={item.date}
                />
            })
        else
            Posts.push(<h1>No posts yet</h1>);

        return Posts;
    }

    render() {
        return (
            <div>
                {this.getPosts()}
            </div>
        );
    }
}

function mapStateToProps(state){
    return { postList: state.postList }
}

export default connect(mapStateToProps, actions)(PostList);