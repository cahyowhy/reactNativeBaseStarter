import Dimensions from 'Dimensions';
import {StyleSheet} from 'react-native';

const width = Dimensions.get('window').width * 0.8;
const fullwidth = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const Styles = {
    FooterFoot: {
        position: 'absolute', flex: 0.1, left: 0, right: 0, bottom: 0, backgroundColor: 'green',
        flexDirection: 'row', height: 50, alignItems: 'center'
    },
    TextWhite: {color: 'white'},
    MainView: {flex: 1, flexDirection: 'column'},
    Hide: {display: 'none'},
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        height: height-80,
        width: fullwidth,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    TextButtonPickedPlace:{
        textAlign:'center',
        color:'white'
    },
    ButtonPickedPlace:{
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderRadius:0,
        width:fullwidth
    },
    DrawerMain: {width: width, height: height, backgroundColor: 'white', position: 'absolute', zIndex: 21}
};

export default Styles;