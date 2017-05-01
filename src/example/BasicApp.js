import {
    StackNavigator,
} from 'react-navigation';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen';

export const BasicApp = StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});