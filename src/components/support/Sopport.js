import React, {useState, useRef, useEffect} from 'react';
import '../../css/admin/App.css';
import Form from '../Form/Form.js';

function Support() {
    const [showChat, setShowChat] = useState(false);
    let listRef = useRef(null);

    const handleOpen = () => {
        setShowChat(true)
    };

    function handleClose() {
        setShowChat(false)
    }

    useEffect(() => {
        if (showChat === true) {
            listRef.current.scrollTop = listRef.current.scrollHeight;
        }
    });


    return (
        <div>
            {showChat &&
                <div className="app">
                    <div className="app_header">
                        {
                            showChat ?
                                <button onClick={handleClose} className="close_button">X</button>
                                : null
                        }
                        <h2>
                            Smart Home Support
                        </h2>
                    </div>
                    <div className="app_list" ref={listRef}>
                        <Form/>
                    </div>
                </div>
            }
            {
                !showChat ?
                    <img className="icon1" src={"/img/chat-icon.png"} alt="img" onClick={handleOpen}/>
                    : null
            }
        </div>
    );
}

export default Support;