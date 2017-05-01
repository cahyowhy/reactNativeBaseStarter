import React, {Component} from 'react';
import {Container, Content, List, ListItem, Thumbnail, Text, Body, Left, Right} from 'native-base';
import {View, ScrollView} from 'react-native';
export default class ListAvatarExample extends Component {
    render() {
        /*<ScrollView onScroll={()=>setTimeout(()=>{console.log("scrolled"); this.props.onScrolled},5000)}>*/
        let items = [
            {
                note: "reprehenderit nisi consectetur pariatur quis ea aliquip",
                name: "deserunt",
                registered: "03:32"
            },
            {
                note: "culpa cupidatat sit deserunt sint aute cillum",
                name: "tempor",
                registered: "08:42"
            },
            {
                note: "deserunt laboris reprehenderit occaecat aliquip cupidatat labore",
                name: "laborum",
                registered: "08:07"
            },
            {
                note: "sunt velit cillum cillum esse ipsum eiusmod",
                name: "sint",
                registered: "11:42"
            },
            {
                note: "nisi aliqua cillum commodo ullamco est exercitation",
                name: "nostrud",
                registered: "08:14"
            },
            {
                note: "anim non ad sunt eiusmod do pariatur",
                name: "enim",
                registered: "03:21"
            },
            {
                note: "in sunt cupidatat cupidatat magna est id",
                name: "do",
                registered: "01:21"
            },
            {
                note: "consequat tempor proident ea aliqua eu esse",
                name: "quis",
                registered: "09:20"
            },
            {
                note: "non deserunt anim sit culpa non officia",
                name: "et",
                registered: "12:08"
            },
            {
                note: "sunt ut eiusmod aute commodo officia proident",
                name: "Lorem",
                registered: "05:43"
            }
        ];
        return (
            <Container>
                {/*
                 <TouchableHighlight style={{padding:20, color: 'white', backgroundColor: 'black'}} onPress={() => this.props.register() }>
                 {this.props.registered ? <Text style={{color: 'white'}}>registered</Text> : <Text style={{color: 'white'}}>register</Text>}
                 </TouchableHighlight>    isScrolling
                */}
                <ScrollView onScroll={this.props.onScrolled}>
                    <Content>
                        <List dataArray={items} renderRow={(item) =>
                      <ListItem avatar>
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