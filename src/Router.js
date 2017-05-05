import {
    StackNavigator, TabNavigator
} from 'react-navigation';
import Profile from './Profile';
import Camera from './Camera';
import Direction from './Direction';
import People from './People';
import Main from './App';
import {Icon} from 'native-base';
import React, {Component} from 'react';

export const Tab = TabNavigator({
    Main: {
        screen: Main,
        tabBarIcon: <Icon name="apps" />
    },
    Camera: {
        screen: Camera,
        tabBarIcon: <Icon name="apps" />
    },
    Direction: {
        screen: Direction,
        tabBarIcon: <Icon name="camera" />
    },
    /*Profile: {
     screen: Profile,
     tabBarIcon: <Icon name="navigate" />,
     },*/
    People: {
        screen: People,
        tabBarIcon: <Icon name="person" />,
    }
});

const Route = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        },
    },
    Camera: {
        screen: Camera,
        navigationOptions: {
            header: null
        },
    },
    Direction: {screen: Direction},
    Profile: {screen: Profile},
    People: {screen: People}
});