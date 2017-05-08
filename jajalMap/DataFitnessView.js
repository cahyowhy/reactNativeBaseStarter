import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    /*static navigationOptions = ({navigation}) => ({
     title: `${navigation.state.params.items.name} detail`,
     headerRight: <Button transparent onPress={()=>alert("hay")}><Icon name="menu"/></Button>
     });*/

    render() {
        return (
            <View>
                <Text>TES</Text>
                <Text>TES</Text>
                <Text>TES</Text>
            </View>
        )
    }
}