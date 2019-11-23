import React, {useState, useEffect, useRef} from 'react';
import './Form_admin.css';
import Message_admin from '../Message/Message_admin';
import fire from "../../firebase_";

export default function Form_admin(props) {

    const [userName] = useState("Admin");
    const [response, setResponse] = useState("");
    const [list, setList] = useState([]);
    const [replies, setReplies] = useState([]);
    const [current, setCurrent] = useState();
    const [showMessages, setShowMessages] = useState(false);

    let messagesRef = useRef(fire.database.ref('messages'));
    let listRef = useRef(null);

    function openMessages() {
        setShowMessages(!showMessages);
    }

    function displayMessages(messageId) {
        setCurrent(messageId);
        fire.database.ref('messages/' + messageId).on("value", snapshot => {
            console.log(snapshot.val())
            setReplies(Object.values(snapshot.val()));
            setShowMessages(!showMessages);
        })
    }

    const handleChange = (event) => {
        setResponse(event.target.value);
    };

    function handleSend() {
        if (response) {
            var newItem = {
                userName: userName,
                response: response,
            };
            fire.database.ref('messages/' + current).push(newItem);
            setResponse("");
        }
    }

    function handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        handleSend();
    }

    function listenMessages() {
        messagesRef.current
            .limitToLast(30)
            .on('value', message => {
                if (message.val && message.val()) {
                    console.log(message.val())
                    setList(message.val());

                } else {
                    setList([]);
                }
            });
    }

    useEffect(() => {
        listenMessages();

    }, []);


    return (
        <div className="form1">
            <div className="key_button">
                {
                    Object.keys(list).map((item, i) => {
                        let date = new Date(+item.split("-")[1]).toLocaleDateString();
                        let time = new Date(+item.split("-")[1]).toLocaleTimeString();

                        return (
                            <div key={item} onClick={e => displayMessages(item)}>
                                {
                                    date + " " + time
                                }
                            </div>
                        )
                    })
                }
            </div>
            {showMessages &&
            <div className="form_message1" id="chatList" ref={listRef}>
                {replies.map((item, index) =>
                    <Message_admin key={index} message={item}/>
                )}
            </div>
            }
            <div className="form_row1">
                <div className="input_area1">
                    <input
                        className="form_input1"
                        type="text1"
                        placeholder="Type message"
                        value={response}
                        onChange={handleChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        className="form_button1"
                        onClick={handleSend}
                    >
                        <img className="img" src={"/img/Send.png"} alt="img"/>
                    </button>
                </div>
            </div>
        </div>
    );
}