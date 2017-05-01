import React, {Component} from 'react';
import { View, Text } from 'react-native';
import HeaderNav from './Components/HeaderNav';
import FooterFoot from './Components/FooterFoot';
import Styles from './Components/Styles';
import ListAvatarExample from './Components/ListAvatarExample';
import {Tabs} from './Router';
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
                {/*<Tabs/>*/}
            </View>
        );
    }
}