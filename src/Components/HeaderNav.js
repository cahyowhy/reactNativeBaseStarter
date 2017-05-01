/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {Title, Header, Body, Left, Icon, Right, Button, ListItem, Text, Switch, Content} from 'native-base';
import {View} from 'react-native';
import Styles from './Styles';

export default class HeaderNav extends Component {
    render() {
        let isDrawerOpen = this.props.isDrawerOpened ? Styles.DrawerMain : Styles.Hide;
        return (
            <View>
                <View style={isDrawerOpen}>
                    <Content>
                        <ListItem icon>
                            <Left>
                                <Icon name="plane"/>
                            </Left>
                            <Body>
                            <Text>Airplane Mode</Text>
                            </Body>
                            <Right>
                                <Switch value={false}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="wifi"/>
                            </Left>
                            <Body>
                            <Text>Wi-Fi</Text>
                            </Body>
                            <Right>
                                <Text>GeekyAnts</Text>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name="bluetooth"/>
                            </Left>
                            <Body>
                            <Text>Bluetooth</Text>
                            </Body>
                            <Right>
                                <Text>On</Text>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    </Content>
                </View>
                <Header style={Styles.Header}>
                    <Left>
                        <Button transparent><Icon name='arrow-back'/></Button>
                    </Left>
                    <Body>
                    <Title>Main title</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={this.props.onDrawerOpened}><Icon name='menu'/></Button>
                    </Right>
                </Header>
            </View>
        );
    }
}
