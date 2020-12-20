import React from 'react';
import './Message.css';
import {Avatar} from '@material-ui/core';

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>samuel
                <span className="message_timestamp">
                    this is a time stamp
                </span>
                </h4>
                <p>This is a message</p>
            </div>
        </div>
    )
}

export default Message;
