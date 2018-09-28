// Core
import React, { Component } from 'react';
import moments from 'moment';

// Components
import { Consumer } from 'components/HOC/withProfile'

// Instruments
import Styles from './styles.m.css';

export default class Post extends Component {
    render() {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <img src = { context.avatar } />
                        <a>{ context.currentUserFirstName } { context.currentUserLastName }</a>
                        <time>{ moments().format('MMMM D h:ms:ss a') }</time>
                        <p>Howdy!</p>
                    </section>
                )}
            </Consumer>
        )
    }
}