import React,{useState} from 'react';
import vint from './img/vint.png'
function Fans () {
    const[toggleState1,setToggleState1]=useState('fan');
    const[toggleState2,setToggleState2]=useState('fan');
    const[toggleState3,setToggleState3]=useState('fan');
    const[toggleState4,setToggleState4]=useState('fan');
    let toggle1 = () => {
        setToggleState1(toggleState1 === "fan" ? "rotate" : "fan");
    }
    let toggle2 = () => {
        setToggleState2(toggleState2 === "fan" ? "rotate" : "fan");
    }
    let toggle3 = () => {
        setToggleState3(toggleState3 === "fan" ? "rotate" : "fan");
    }
    let toggle4 = () => {
        setToggleState4(toggleState4 === "fan" ? "rotate" : "fan");
    }
    return (
        <div className="card" id="air">
            <h2>Fans</h2>
            <div className="container_f">
                <p>Room1</p>
                <img src={vint} width="50" height="50" className={`fan ${toggleState1}`} onClick={toggle1}/>
                <p>Room2</p>
                <img src={vint} width="50" height="50" className={toggleState2} onClick={toggle2}/>
                <p>Room3</p>
                <img src={vint} width="50" height="50" className={toggleState3} onClick={toggle3}/>
                <p>Room4</p>
                <img src={vint} width="50" height="50" className={toggleState4} onClick={toggle4}/>
            </div>
        </div>
    )
}

export default Fans;