import {
    StackNavigator,
} from 'react-navigation';
import Profile from './Profile';
import Profile2 from './Profile2';
import Main from './App';

export const Route = StackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'Main',
            header:null
        },
    },
    Profile: {screen: Profile},
    Profile2: {screen: Profile2},
});