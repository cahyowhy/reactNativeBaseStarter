import React, {Component} from 'react';
import {Tab} from './Router';
import {Platform, PermissionsAndroid} from 'react-native';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box"; //for android

export default class Profile extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (Platform.OS === "android") {
            LocationServicesDialogBox.checkLocationServicesIsEnabled({
                message: "<h2>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
                ok: "YES",
                cancel: "NO"
            });
        }
    }

    render() {
        return (
            <Tab/>
        )
    }
}