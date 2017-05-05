import RNGooglePlaces from 'react-native-google-places';
import {TouchableOpacity, View, Text} from 'react-native';
import {Button} from 'native-base';
import React, {Component} from 'react';
import Style from './Styles';
export default class AutoCompleteMap extends Component {
    constructor(props) {
        super(props);
        this.setNewPlaces = this.setNewPlaces.bind(this);
    }

    setNewPlaces(latlng) {
        this.props.onSetNewPlace(latlng);
    }

    openSearchModal() {
        const context = this;
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                console.log(place);
                let latlng = {
                    latitude: place.latitude,
                    longitude: place.longitude
                };
                context.setNewPlaces(latlng);
            }).catch(error => console.log(error.message));
    }

    render() {
        return (
            <Button style={Style.ButtonPickedPlace} onPress={() => this.openSearchModal()}>
                <Text style={Style.TextButtonPickedPlace}>Pick a Place</Text>
            </Button>
        );
    }
}