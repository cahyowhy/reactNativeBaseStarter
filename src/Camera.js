import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import LocationStore from './Components/AltFluxTutor/Store/LocationStore';
import LocationActions from  './Components/AltFluxTutor/Actions/LocationActions';

export default class Camera extends Component {
    constructor(props) {
        super(props);
        this.state = LocationStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        LocationStore.listen(this.onChange);
        LocationActions.fetchLocations();
    }

    componentWillUnmount() {
        LocationStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        if (this.state.errorMessage) {
            return (
                <View>Something is wrong</View>
            );
        }

        if (!this.state.locations.length) {
            return (
                <View>
                    <Image style={{width: 50, height: 50}} source={{require: './img/loading.gif'}}/>
                </View>
            )
        }

        return (
            <View>
                {this.state.locations.map((location) => {
                    return (
                        <Text>{location.name}</Text>
                    );
                })}
            </View>
        );
    }
}