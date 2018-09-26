import React, { Component } from 'react';
import PostItem from './PostItem';
import faker from 'faker';

class PostList extends Component {
    render() {
        return (
            <div>
                <PostItem
                    name={faker.name.firstName()}
                    title={faker.name.title()}
                />

                <PostItem
                    name={faker.name.firstName()}
                    title={faker.name.title()}
                />

                <PostItem
                    name={faker.name.firstName()}
                    title={faker.name.title()}
                />

            </div>
        );
    }
}

export default PostList;