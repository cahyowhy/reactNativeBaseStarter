import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Profile extends Component {
    render() {
        const{params} = this.props.navigation.state;
        return (
            <View>
                <Text>{params.items.name}</Text>
                <Text>{params.items.note}</Text>
                <Text>{params.items.registered}</Text>
            </View>
        )
    }
}