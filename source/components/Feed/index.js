// Core
import React, { Component } from 'react';
import moment from 'moment';

// Components
import StatusBar from 'components/StatusBar';
import Composer from 'components/Composer';
import Post from 'components/Post';
import Spinner from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import { getUniqueID } from 'instruments';

export default class Feed extends Component {

    constructor () {
        super();

        this._createPost = this._createPost.bind(this);
    }
    state = {
        posts: [
            { id: '123', comment: 'Hi there!', created: 1538682190 },
            { id: '456', comment: 'Hi!', created: 1538682195 }
        ],
        isSpinning: true,
    }

    _createPost(comment) {
        const post = {
            id: getUniqueID(),
            created: moment.now(),
            comment: comment,
        }

        this.setState(({ posts }) => ({
            posts: [post, ...posts]
        }));
    }

    render () {
        const { posts, isSpinning } = this.state;

        const postsJSX = posts.map((post) => {
            return (<Post key = { post.id } { ...post } />)
        })

        return (
            <section className = { Styles.feed }>
                <Spinner isSpinning = { isSpinning } />
                <StatusBar />
                <Composer _createPost = { this._createPost } />
                { postsJSX }
            </section>
        );
    }
}