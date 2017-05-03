import React, {Component} from 'react';
import {Button, Text} from 'native-base';
import Style from './Styles';

export default class GeoLocation extends Component {
    constructor(props){
        super(props);
        this.state = {initialPosition: null, lastPosition: null};
    }

    watchID: ?number = null;

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                let initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
                this.props.onSetInitalPos(initialPosition);
            },
            (error) => alert(JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
            let lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
            this.props.onSetLastPos(lastPosition);
        });
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
    }

    render(){
        return(
            <Button style={Style.Hide}><Text>Get Location</Text></Button>
        );
    }
}