import Dimensions from 'Dimensions';
import {StyleSheet} from 'react-native';

const fullwidth = Dimensions.get('window').width;
const fullheight = Dimensions.get('window').height;
const Styles = {
    FeedContainer: {
        ...StyleSheet.absoluteFillObject,
        width: fullwidth,
        height: fullheight - 40
    },
    Fab: {
        backgroundColor: '#CF56A1',
    },
    colorWhite: {
        color: 'white'
    },
    TabBar: {
        backgroundColor: '#511E78'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: fullheight - 40,
        width: fullwidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
};

export default Styles;