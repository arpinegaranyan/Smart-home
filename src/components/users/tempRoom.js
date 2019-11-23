import React, { useState, useEffect } from 'react';

function TempRoom(props) {
    let [temp1, setTemp1] = useState(localStorage.getItem('temp1') || 25);
    let [temp2, setTemp2] = useState(localStorage.getItem('temp2') || 25);
    let [temp3, setTemp3] = useState(localStorage.getItem('temp3') || 25);
    let [temp4, setTemp4] = useState(localStorage.getItem('temp4') || 25);

    useEffect(() => {
        localStorage.setItem('temp1', temp1);
        localStorage.setItem('temp2', temp2);
        localStorage.setItem('temp3', temp3);
        localStorage.setItem('temp4', temp4);
    }, [temp1, temp2, temp3, temp4])

    return (
        <div className="container" id="temperature">
            <h2>Temperature</h2>
            <div>
                <div className="card_t">
                    <div className="container_t">
                        <h3>Room 1</h3>
                        <p>{temp1}</p>
                        <input type="range" min="15" max="32" value={temp1} onChange={(e) => setTemp1(e.target.value)} />
                    </div>
                </div>
                <div className="card_t">
                    <div className="container_t">
                        <h3>Room 2</h3>
                        <p>{temp2}</p>
                        <input type="range" min="15" max="32" value={temp2} onChange={(e) => setTemp2(e.target.value)} />
                    </div>
                </div>
            </div>
            <div>
                <div className="card_t">
                    <div className="container_t">
                        <h3>Room 3</h3>
                        <p>{temp3}</p>
                        <input type="range" min="15" max="32" value={temp3} onChange={(e) => setTemp3(e.target.value)} />
                    </div>
                </div>
                <div className="card_t">
                    <div className="container_t">
                        <h3>Room 4</h3>
                        <p>{temp4}</p>
                        <input type="range" min="15" max="32" value={temp4} onChange={(e) => setTemp4(e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default TempRoom;