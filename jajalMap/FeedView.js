import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ActionSheet, Fab, Icon, Button} from 'native-base';
import Style from './Style';

let BUTTONS = [
    'Bersepeda',
    'Berlari',
    'Cancel',
];
let CANCEL_INDEX = 3;

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.onrRouteToFeedDetail = this.onrRouteToFeedDetail.bind(this);
    }

    onrRouteToFeedDetail() {
        this.props.navigation.navigate('DetailMain');
    }

    render() {
        return (
            <View style={Style.FeedContainer}>
                <Fab
                    style={Style.Fab}
                    position="bottomRight"
                    onPress={()=>ActionSheet.show({
                        options: BUTTONS,
                        cancelButtonIndex: CANCEL_INDEX,
                        title: 'Add Activity'
                    },
                    (buttonIndex) => {
                        this.onrRouteToFeedDetail();
                    })}
                >
                    <Icon name="add"/>
                </Fab>
            </View>
        )
    }
}