import React, {Component} from 'react';
import MessageActions from '../actions/MessageActions';
import {TextInput, StyleSheet} from 'react-native';
export default class LocationTextInput extends Component {
    constructor() {
        super();
        this.state = {input: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <TextInput
                style={styles.locationInput}
                editable={true}
                onChangeText={(text) => this.setState({input: text})}
                onSubmitEditing={this.handleSubmit}
                placeholder={'please enter a location...'}
                value={this.state.input}
            />
        );
    }

    handleSubmit() {
        let location = this.state.input;
        MessageActions.fetchMessages(location);
        this.setState({input: ''});
    }
}

let styles = StyleSheet.create({
    locationInput: {
        height: 40,
        margin: 10,
        marginBottom: 0,
        padding: 10,
        backgroundColor: '#F8F8F8',
        fontFamily: 'Avenir',
        fontSize: 20,
        borderRadius: 10
    }
});
