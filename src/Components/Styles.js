import Dimensions from 'Dimensions';

const width = Dimensions.get('window').width * 0.8;
const height = Dimensions.get('window').height;
const Styles = {
    FooterFoot: {
        position: 'absolute', flex: 0.1, left: 0, right: 0, bottom: 0, backgroundColor: 'green',
        flexDirection: 'row', height: 50, alignItems: 'center'
    },
    MainView: {flex: 1, flexDirection: 'column'},
    Hide: {display: 'none'},
    DrawerMain: {width: width, height: height, backgroundColor: 'white', position: 'absolute', zIndex: 21}
};

export default Styles;