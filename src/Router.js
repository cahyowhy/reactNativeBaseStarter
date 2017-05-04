import {
    StackNavigator,
} from 'react-navigation';
import Profile from './Profile';
import Camera from './Camera';
import Direction from './Direction';
import People from './People';
import Main from './App';

export const Route = StackNavigator({
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