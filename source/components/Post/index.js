// Core
import React, { Component } from 'react';
import moments from 'moment';

// Instruments
import Styles from './styles.m.css';

export default class Post extends Component {
    render() {
        const {
            currentUserFirstName,
            currentUserLastName,
            avatar
        } = this.props;

        return (        
            <section className = { Styles.post }>
                <img src = { avatar } />
                <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                <time>{ moments().format('MMMM D h:ms:ss a') }</time>
                <p>Howdy!</p>
            </section>
        )
    }
}