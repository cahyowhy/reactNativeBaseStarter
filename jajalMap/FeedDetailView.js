import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Style from './Style';

export default class Profile extends Component {
    watchID: ?number = null;

    constructor(props) {
        super(props);
        this.setPosition = this.setPosition.bind(this);
        this.state = {
            region: {
                latitude: 0.0,
                longitude: 0.0,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            marker: {
                latlng: {
                    latitude: 0.0,
                    longitude: 0.0
                }
            }
        };
    }

    setPosition(position) {
        this.setState({
            marker: {
                latlng: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            }
        });

        this.setState({
            region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        });
    }

    componentDidMount() {
        const context = this;
        navigator.geolocation.getCurrentPosition(
            (position) => {
                context.setPosition(position)
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            context.setPosition(position)
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={Style.mapContainer}>
                <MapView style={Style.map} region={this.state.region}>
                    <MapView.Marker coordinate={this.state.marker.latlng}/>
                </MapView>
            </View>
        )
    }
}