import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, ListItem} from 'native-base';
export default class MessageBody extends Component {
    render() {
        return (
            <ListItem><Text>{this.props}</Text></ListItem>
        );
    }
}
