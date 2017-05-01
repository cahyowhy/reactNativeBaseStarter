/**
 * Created by MGS on 5/1/2017.
 */
import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'native-base';

import Profile from './Profile';
import Profile2 from './Profile2';

export const Tabs = TabNavigator({
    App: {
        screen: Profile2,
        navigationOptions: {
            tabBarLabel: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarLabel: 'Profile2',
            tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
    },
});