import React, {Component} from 'react';
import {View, Text} from 'react-native';
import MapView from 'react-native-maps';
import Style from './Components/Styles';
import {Button, Icon} from 'native-base';
import AutoCompleteMap from './Components/AutoCompleteMap';
import GeoLocation from './Components/GeoLocation';

export default class Direction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
            marker: {
                latlng: {
                    latitude: 37.78825,
                    longitude: -122.4324
                },
                title: 'my marker',
                description: 'some description ...'
            }
        };
        this.onRegionChange = this.onRegionChange.bind(this);
        this.setMarkerPosition = this.setMarkerPosition.bind(this);
    }

    onRegionChange(region) {
        this.setState({region});
        /*console.log(region.latitude);
         this.setState({
         marker: {
         latlng: {
         latitude: region.latitude,
         longitude: region.longitude
         }
         }
         });*/
    }

    static navigationOptions = ({navigation}) => ({
        title: 'MapView',
        headerRight: <Button transparent onPress={()=>alert("hay")}><Icon name="menu"/></Button>
    });

    setMarkerPosition(latlng) {
        this.setState({
            marker: {
                latlng: {
                    latitude: latlng.latitude,
                    longitude: latlng.longitude
                }
            }
        });
        this.setState({
            region: {
                latitude: latlng.latitude,
                longitude: latlng.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }
        });
    }

    render() {
        return (
            <View style={Style.mapContainer}>
                <Geolocation></Geolocation>
                <MapView style={Style.map} region={this.state.region} onRegionChange={this.onRegionChange}>
                    <MapView.Marker draggable
                                    coordinate={this.state.marker.latlng}
                                    title={this.state.marker.title}
                                    description={this.state.marker.description}
                                    onDrag={() => console.log('onDrag')}
                    />
                </MapView>
                <AutoCompleteMap onSetNewPlace={this.setMarkerPosition}/>
            </View>
        )
    }
}