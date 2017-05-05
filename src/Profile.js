import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'native-base';
import Style from './Components/Styles';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = ({navigation}) => ({
        title: `${navigation.state.params.items.name} detail`,
        headerRight: <Button transparent onPress={()=>alert("hay")}><Icon name="menu"/></Button>
    });

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>{params.items.name}</Text>
                <Text>{params.items.note}</Text>
                <Text>{params.items.registered}</Text>
            </View>
        )
    }
}