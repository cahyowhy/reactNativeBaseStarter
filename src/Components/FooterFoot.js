import React, {Component} from 'react';
import {View} from 'react-native';
import { Footer, FooterTab, Button, Icon} from 'native-base';
import Styles from './Styles';

export default class FooterFoot extends Component {
    render() {
        let isDisplayed = this.props.hide ? Styles.Hide : {};
        return (
            <View style={isDisplayed}>
                <Footer style={Styles.FooterFoot}>
                    <FooterTab>
                        <Button onPress={this.props.onTransitionApp}>
                            <Icon name='apps'/>
                        </Button>
                        <Button onPress={this.props.onTransitionCam}>
                            <Icon name='camera'/>
                        </Button>
                        <Button onPress={this.props.onTransitionDir}>
                            <Icon name='navigate'/>
                        </Button>
                        <Button onPress={this.props.onTransitionPeople}>
                            <Icon name='person'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        );
    }
}