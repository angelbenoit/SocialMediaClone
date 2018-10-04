import React, { Component } from 'react';
import PostItem from './PostItem';
import faker from 'faker';
import { connect } from 'react-redux';
import * as actions from '../Actions';

class PostList extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    getPosts(){
        if(this.props.postList)
            this.props.postList.map(item => {
                console.log(item);
            })
        else
            console.log("No Posts")
    }

    render() {
        this.getPosts();
        return (
            <div>
                <PostItem
                    name={faker.name.findName()}
                    title={faker.name.title()}
                />

                <PostItem
                    name={faker.name.findName()}
                    title={faker.name.title()}
                />

                <PostItem
                    name={faker.name.findName()}
                    title={faker.name.title()}
                />

            </div>
        );
    }
}

function mapStateToProps(state){
    return { postList: state.postList }
}

export default connect(mapStateToProps, actions)(PostList);