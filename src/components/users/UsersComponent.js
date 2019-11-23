import React from 'react';
// used styles
import '../../css/users/App.css';
// used components;
import Weather from './weather.js';
import Light from './Led_one.js';
import TempRoom from './tempRoom.js';
import Music from './music.js';
import Fans from './fan.js';

function UsersComponent () {

    return (
        <>
            <div className="grid-container">
                <div>
                    <div className="card" id="temp_rooms">
                        <TempRoom />
                    </div>
                    <div id={"light_part"}>
                        <Light />
                        <Fans />
                    </div>
                </div>
                <div>
                    <Weather />
                    <Music />
                </div>
            </div >
        </ >
    )
}

export default UsersComponent;