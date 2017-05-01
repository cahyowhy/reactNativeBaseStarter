/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Title, Header, Body, Left, Icon, Right, Button, Container, Content } from 'native-base';
import {View} from 'react-native';
import Dimensions from 'Dimensions';

export default class HeaderNav extends Component {
    render() {
        console.log(Dimensions.get('window'));
        const width= Dimensions.get('window').width*0.8;
        const height= Dimensions.get('window').height;
        return (
            <View>
                <Header>
                    <Left>
                        <Button transparent><Icon name='arrow-back'/></Button>
                    </Left>
                    <Body>
                    <Title>Main title</Title>
                    </Body>
                    <Right>
                        <Button transparent><Icon name='menu'/></Button>
                    </Right>
                </Header>
                {/*<View style={{width :width, height:height, backgroundColor:'red', position:'absolute', zIndex:21 }}>
                    <Content>

                    </Content>
                </View>*/}
            </View>
        );
    }
}
