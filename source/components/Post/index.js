// Core
import React, { Component } from 'react';
import moments from 'moment';

// Instruments
import avatar from 'theme/assets/homer';

export default class Post extends Component {
    render() {
        return (        
            <section>
                <img src = { avatar } />
                <a>Homer Simpson</a>
                <time>{ moments().format('MMMM D h:ms:ss a') }</time>
                <p>Howdy!</p>
            </section>
        )
    }
}