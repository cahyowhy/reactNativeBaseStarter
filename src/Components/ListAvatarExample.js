import React, {Component} from 'react';
import {Container, Content, List, ListItem, Thumbnail, Text, Body, Left, Right} from 'native-base';
import {View, ScrollView} from 'react-native';
import items from './ListData';
export default class ListAvatarExample extends Component {
    constructor(props) {
        super(props);
        this.profileRoute=this.profileRoute.bind(this);
    }

    profileRoute(item) {
        this.props.onTransitionProfile(item);
    }

    render() {
        return (
            <Container>
                <ScrollView onScroll={this.props.onScrolled}>
                    <Content>
                        <List dataArray={items} renderRow={(item) =>
                      <ListItem avatar onPress={()=>this.profileRoute(item)}>
                            <Left>
                                <Thumbnail source={require('../images/user.png')}/>
                            </Left>
                            <Body>
                            <Text>{item.name}</Text>
                            <Text note>{item.note}</Text>
                            </Body>
                            <Right>
                                <Text note>{item.registered} pm</Text>
                            </Right>
                        </ListItem>
                    }>
                        </List>
                    </Content>
                </ScrollView>
            </Container>
        );
    }
}