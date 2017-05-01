import React, {Component} from 'react';
import {Button, Text} from 'native-base';

export default class MainScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button onPress={() => navigate('Profile', { name: 'Jane' }) }><Text>Go to profile</Text></Button>
        );
    }
}