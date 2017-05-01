/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text
} from 'react-native';
import HeaderNav from './src/Components/HeaderNav';
import FooterFoot from './src/Components/FooterFoot';
import Styles from './src/Components/Styles';
import ListAvatarExample from './src/Components/ListAvatarExample';

let timer;
export default class anyarReact extends Component {
    constructor(props){
        super(props);
        this.state={isScrolling:false, isDrawerOpened:false};
        this.onScrolled=this.onScrolled.bind(this);
        this.onDrawerOpened=this.onDrawerOpened.bind(this);
    }
    onDrawerOpened(){
        const context = this;
        this.setState({
            isDrawerOpened: !context.state.isDrawerOpened
        });
    }
    onScrolled(){
        const context = this;
        this.setState({
            isScrolling: true
        });

        clearTimeout(timer);
        timer = setTimeout(function () {
            context.setState({isScrolling:false});
        }, 1000);
    }
    render() {
        return (
            <View style={Styles.MainView}>
                <HeaderNav isDrawerOpened={this.state.isDrawerOpened} onDrawerOpened={this.onDrawerOpened}/>
                <ListAvatarExample onScrolled={this.onScrolled} isScrolling={this.state.isScrolling}/>
                <FooterFoot hide={this.state.isScrolling || this.state.isDrawerOpened}/>
            </View>
        );
    }
}

AppRegistry.registerComponent('anyarReact', () => anyarReact);
