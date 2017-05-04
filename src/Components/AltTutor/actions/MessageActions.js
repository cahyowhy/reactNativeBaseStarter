'use strict';

import alt from '../alt';
import {MessagesFetcher} from '../utils/MessagesFetcher';

export class MessageActions {

    updateMessages(messages) {
        // this.dispatch(messages);
        return messages;
    }

    fetchMessages(location) {
        return (dispatch) => {
            dispatch();
            MessagesFetcher.fetch(location)
                .then((messages) => {
                    console.log(messages);
                    this.updateMessages(messages);
                })
                .catch((e) => {
                    console.log('Response Error', e);
                    this.messagesFailed(e);
                });
        }
    }

    messagesFailed(errorMessage) {
        // this.dispatch(errorMessage);
        return errorMessage;
    }
}

export default alt.createActions(MessageActions);
