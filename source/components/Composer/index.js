// Core
import React, { Component } from 'react';

// Instruments
import avatar from 'theme/assets/homer';

export default class Composer extends Component {
    render() {
        return (
            <section>
                    <img src = { avatar } />
                    <form>
                        <textarea placeholder = { `What's on your mind, Homer?` } />
                        <input type = 'submit' value = 'Post' />
                    </form>
                </section>
        )
    }
}