import {
    StackNavigator, TabNavigator
} from 'react-navigation';
import Profile from './Profile';
import Camera from './Camera';
import Direction from './Direction';
import People from './People';
import Main from './App';
import {StyleSheet} from 'react-native';
import {Icon} from 'native-base';
import React, {Component} from 'react';

export const Route = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            header: null
        },
    },
    Profile: {screen: Profile}
});

export const Tab = TabNavigator({
        Main: {
            screen: Route,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="apps" style={{color:'white'}}/>,
            }
        },
        Camera: {
            screen: Camera,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="camera" style={{color:'white'}}/>,
            }
        },
        Direction: {
            screen: Direction,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="navigate" style={{color:'white'}}/>,
            }
        },
        People: {
            screen: People,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => <Icon name="person" style={{color:'white'}}/>,
            }
        }
    }, {
        tabBarOptions: {
            showIcon: true,
            showLabel: false
        },
        tabBarPosition: 'bottom'
    }
);