import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HeaderNav from './Components/HeaderNav';
import FooterFoot from './Components/FooterFoot';
import Styles from './Components/Styles';
import ListAvatarExample from './Components/ListAvatarExample';
import {Tabs} from './Router';
import Geolocation from './Components/GeoLocation';
let timer;
export default class anyarReact extends Component {
    constructor(props) {
        super(props);
        this.state = {isScrolling: false, isDrawerOpened: false, initialPosition: null, lastPosition: null};
        this.onScrolled = this.onScrolled.bind(this);
        this.onDrawerOpened = this.onDrawerOpened.bind(this);
        this.onRouteToProfile = this.onRouteToProfile.bind(this);
        this.onRouteToPeople = this.onRouteToPeople.bind(this);
        this.onRouteToCamera = this.onRouteToCamera.bind(this);
        this.onRouteToDirection = this.onRouteToDirection.bind(this);
        this.onRouteToApp = this.onRouteToApp.bind(this);
        this.onSetInitialPosition = this.onSetInitialPosition.bind(this);
        this.onSetLastPosition = this.onSetLastPosition.bind(this);
    }

    onSetInitialPosition(initialPosition) {
        initialPosition = JSON.parse(initialPosition);
        this.setState({
            initialPosition: {
                latitude: initialPosition.coords.latitude,
                longitude: initialPosition.coords.longitude
            }
        });
    }

    onSetLastPosition(lastPosition) {
        lastPosition = JSON.parse(lastPosition);
        this.setState({
            lastPosition: {
                latitude: lastPosition.coords.latitude,
                longitude: lastPosition.coords.longitude
            }
        });
    }

    onDrawerOpened() {
        const context = this;
        this.setState({
            isDrawerOpened: !context.state.isDrawerOpened
        });
    }

    onRouteToProfile(item) {
        this.props.navigation.navigate('Profile', {items: item});
    }

    onRouteToPeople() {
        this.props.navigation.navigate('People');
    }

    onRouteToCamera() {
        this.props.navigation.navigate('Camera');
    }

    onRouteToDirection() {
        this.props.navigation.navigate('Direction');
    }

    onRouteToApp() {
        this.props.navigation.navigate('Main');
    }

    onScrolled() {
        const context = this;
        this.setState({
            isScrolling: true
        });

        clearTimeout(timer);
        timer = setTimeout(function () {
            context.setState({isScrolling: false});
        }, 1000);
    }

    render() {
        return (
            <View style={Styles.MainView}>
                <Geolocation onSetInitalPos={this.onSetInitialPosition}
                             onSetLastPos={this.onSetLastPosition}></Geolocation>
                <HeaderNav isDrawerOpened={this.state.isDrawerOpened} onDrawerOpened={this.onDrawerOpened}/>
                <ListAvatarExample onTransitionProfile={this.onRouteToProfile} onScrolled={this.onScrolled}
                                   isScrolling={this.state.isScrolling}/>
                {/*<FooterFoot onTransitionApp={this.onRouteToApp} onTransitionCam={this.onRouteToCamera}
                            onTransitionPeople={this.onRouteToPeople} onTransitionDir={this.onRouteToDirection}
                            hide={this.state.isScrolling || this.state.isDrawerOpened}/>*/}
            </View>
        );
    }
}