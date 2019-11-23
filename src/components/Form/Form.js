import React, {useState, useEffect, useRef} from 'react';
import './Form.css';
import Message from '../Message/Message';
import fire from "../../firebase_";

export default function Form() {

    const [userName] = useState("You");
    const [message, setMessage] = useState("");
    const [list, setList] = useState([]);
    let uniqueKey = useRef(localStorage.getItem("messageKey") || `message-${Date.now()}`);
    let messageRef = useRef(fire.database.ref('messages/' + uniqueKey.current));

    const handleChange = (event) => {
        setMessage(event.target.value)
    };

    function handleSend() {
        if (message) {
            let newItem = {
                userName: userName,
                message: message,
            };
            messageRef.current.push(newItem);
            setMessage("");
            localStorage.setItem("messageKey", uniqueKey.current);
        }
    }


    function handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        handleSend();
    }

    function listenMessages() {
        messageRef.current
            .limitToLast(50)
            .on('value', message => {
                if (message.val && message.val()) {
                    setList(
                        Object.values(message.val()),
                    );
                } else {
                    setList(
                        Object.values(message.val),
                    );
                }
            });
    }

    useEffect(() => {
        listenMessages();
    }, []);


    return (
        <div className="form">
            <div className="form_message" id="chatList">
                {list.map((item, index) =>
                    <Message key={index} message={item}/>
                )}
            </div>
            <div className="form_row">
                <div className="input_area">
                    <input
                        className="form_input"
                        type="text"
                        placeholder="Type message"
                        value={message}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="form_button"
                        onClick={handleSend}
                    >
                        <img className="img" src={"/img/Send.png"} alt="img"/>
                    </button>
                </div>
            </div>

        </div>
    );
}
