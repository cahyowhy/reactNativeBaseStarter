/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
/*import App from './src/App';*/
/*import {BasicApp} from './src/example/BasicApp';*/
import {Tab} from './src/Router';
export default class anyarReact extends Component {
    render() {
        return (
            <Tab/>
        );
    }
}

AppRegistry.registerComponent('anyarReact', () => anyarReact);
