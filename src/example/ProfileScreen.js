import React, {Component} from 'react';
import {Button, Text} from 'native-base';

export default class ProfileScreen extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.name,
    });
    render() {
        const { goBack } = this.props.navigation;
        return (
            <Button onPress={() => goBack()}><Text>Go back</Text></Button>
        );
    }
}