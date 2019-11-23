import React from 'react';
import './Message.css';

export default function Message(props) {

    return (
        <>
            <div>
                {!props.message.response &&
                    <div className="messages message_user">
                        <span className="message_author">
                            {props.message.userName}:
                        </span>
                        <span>
                            {props.message.message}
                        </span>
                    </div>
                }
            </div>
            <div>
                {props.message.response &&
                    <div className="messages message_admin">
                        <span className="message_author">
                            {props.message.userName}:
                        </span>
                        <span>
                       {props.message.response}
                        </span>
                    </div>
                }
            </div>
        </>
    )
}