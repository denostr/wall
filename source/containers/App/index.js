// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

// Components
import Feed from 'components/Feed';
import { Provider } from 'components/HOC/withProfile';

// Instruments
import avatar from 'theme/assets/homer';

const options = {
    avatar,
    currentUserFirstName: 'Homer',
    currentUserLastName: 'Simpson'
}

@hot(module)
export default class App extends Component {
    render () {
        return (
            <Provider value = { options }>
                <Feed />
            </Provider>
        );
    }
}
