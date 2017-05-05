/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';
import {Container} from 'native-base';
/*import App from './src/App';*/
/*import {BasicApp} from './src/example/BasicApp';*/
import {Tab, Route} from './src/Router';
export default class anyarReact extends Component {
    render() {
        return (
            <Container>
                <Tab/>
            </Container>
        );
    }
}

AppRegistry.registerComponent('anyarReact', () => anyarReact);
