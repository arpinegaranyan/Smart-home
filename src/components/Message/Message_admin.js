import React from 'react';
import './Message.css';

export default function Message_admin(props) {
    return (
        <>
            <div>
                {props.message.response &&
                    <div className="messages message_admin">
                        <span className="message_author">
                            {props.message.userName === "Admin" ? "You" : props.message.userName}:
                        </span>
                        <span>
                            {props.message.response}
                        </span>
                    </div>
                }
            </div>
            <div>
                {!props.message.response &&
                    <div className="messages message_user">
                        <span className="message_author">
                            {props.message.userName === "You" ? "User" : props.message.userName}:
                        </span>
                        <span>
                            {props.message.message}
                         </span>
                    </div>
                }
            </div>
        </>
    )
}