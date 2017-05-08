import React, {Component} from 'react';
import {View, Text, Platform, ToastAndroid, PermissionsAndroid} from 'react-native';
import MapView from 'react-native-maps';
import Style from './Style';
import Utils from './RealmDb/Utils';

export default class FeedDetailView extends Component {
    watchID: ?number = null;

    constructor(props) {
        super(props);
        this.setPosition = this.setPosition.bind(this);
        this.LocationRequest = this.LocationRequest.bind(this);
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
            },
            polylines: []
        };
    }

    setPosition(position) {
        this.setState({
            region: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            marker: {
                latlng: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            },
            polylines: this.state.polylines.concat([{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }])
        });

        console.log(this.state.polylines);
    }

    async LocationRequest() {
        const context = this;
        if (Platform.OS === "android") {
            console.log(PermissionsAndroid);
            try {
                const grantedAndroidPermission = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                        'title': "App",
                        'message': 'Allow App access your location'
                    }
                );

                if (grantedAndroidPermission) {
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
            } catch (err) {
                console.log(err);
            }
        } else {
            console.log('im here false');
        }

    }

    componentDidMount() {
        const context = this;
        ToastAndroid.show("adawd", ToastAndroid.LONG);
        context.LocationRequest().done();

        /*navigator.geolocation.getCurrentPosition(
         (position) => {
         context.setPosition(position)
         },
         (error) => alert(JSON.stringify(error)),
         {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
         );

         this.watchID = navigator.geolocation.watchPosition((position) => {
         context.setPosition(position)
         });*/
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render() {
        return (
            <View style={Style.mapContainer}>
                <MapView style={Style.map} region={this.state.region}>
                    <MapView.Marker coordinate={this.state.marker.latlng}/>
                    {this.state.polylines.map(polyline => (
                        <MapView.Polyline
                            key={Utils.guid()}
                            coordinates={this.state.polylines}
                            strokeColor="#000"
                            fillColor="rgba(255,0,0,0.5)"
                            strokeWidth={1}
                        />
                    ))}
                </MapView>
            </View>
        )
    }
}