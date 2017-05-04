import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MessageFooter extends Component {
    render() {
        return (
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    <Text style={styles.username}>{this.props.user} </Text>
                    - {this.props.timestamp} with {this.props.retweets} retweets
                </Text>
            </View>
        );
    }
}

let styles = StyleSheet.create({
    footerContainer: {
        marginTop: 2
    },
    footerText: {
        fontFamily: 'Avenir',
        fontSize: 10
    },
    username: {
        fontWeight: '800'
    }
});

