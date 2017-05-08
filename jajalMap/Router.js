import {
    StackNavigator, TabNavigator
} from 'react-navigation';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, {Component} from 'react';
import FeedView from './FeedView';
import FeedDetailView from './FeedDetailView';
import SettingView from './SettingView';
import DataFitnessView from './DataFitnessView';
import Style from './Style';
export const Main = StackNavigator({
    Main: {
        screen: FeedView,
        navigationOptions: {
            header: null
        },
    },
    DetailMain: {
        screen: FeedDetailView,
        navigationOptions: {
            header: null
        },
    }
});

export const Tab = TabNavigator({
        Main: {
            screen: Main,
            navigationOptions: {
                tabBarIcon: () => <Icon name="directions-bike" style={Style.colorWhite} size={20}/>,
            }
        },
        DataFitness: {
            screen: DataFitnessView,
            navigationOptions: {
                tabBarIcon: () => <Icon name="fitness-center" style={Style.colorWhite} size={20}/>,
            }
        },
        Setting: {
            screen: SettingView,
            navigationOptions: {
                tabBarIcon: () => <Icon name="settings" style={Style.colorWhite} size={20}/>,
            }
        }
    }, {
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            style: Style.TabBar
        },
        tabBarPosition: 'bottom'
    }
);