import MessageBody from './MessageBody';
import MessageFooter from './MessageFooter';
import React, {Component} from 'react';
import {View} from 'react-native';

export default class MessageContainer extends Component {

  render(){
    let { body, ...props } = this.props.message;
    return(
      <View style={{padding: 10}}>
        <MessageBody body={
            body}/>
        <MessageFooter {...props}/>
      </View>
    );
  }
}
