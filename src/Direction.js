import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Style from './Components/Styles';

export default class Direction extends Component {
    constructor(props){
        super(props);
        this.state={
            region:{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        }
    }
    render() {
        return (
            <View style={Style.mapContainer}>
                <MapView style={Style.map} region={this.state.region}>
                </MapView>
            </View>
        )
    }
}