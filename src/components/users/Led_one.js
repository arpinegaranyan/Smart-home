import React,{ useState } from 'react';
import fire from '../../firebase_.js';
// import '../App.css';


function Light(props) {
  const [toggleState1, setToggleState1] = useState("off");
  const [toggleState2, setToggleState2] = useState("off");
  const [toggleState3, setToggleState3] = useState("off");
  const [toggleState4, setToggleState4] = useState("off");
  let LED_STATUS_1;
  let LED_STATUS_2;
  let LED_STATUS_3;
  let LED_STATUS_4;
  let toggle_one = () => {
    setToggleState1(toggleState1 === "off" ? "on" : "off");
    toggleState1==='on'?
      fire.database.ref().update({
        LED_STATUS_1:1,
       }):
       fire.database.ref().update({
        LED_STATUS_1:0,
       });
       toggle_one.bind(this,LED_STATUS_1)
 }

 let toggle_two = () => {
  setToggleState2(toggleState2 === "off" ? "on" : "off");
  toggleState2==='on'?
    fire.database.ref().update({
      LED_STATUS_2:1,
     }):
     fire.database.ref().update({
      LED_STATUS_2:0,
     });
     toggle_two.bind(this,LED_STATUS_2)
}

let toggle_three = () => {
  setToggleState3(toggleState3 === "off" ? "on" : "off");
  toggleState3==='on'?
    fire.database.ref().update({
      LED_STATUS_3:1,
     }):
     fire.database.ref().update({
      LED_STATUS_3:0,
     });
     toggle_three.bind(this,LED_STATUS_3)
}


let toggle_four = () => {
  setToggleState4(toggleState4 === "off" ? "on" : "off");
  toggleState4==='on'?
    fire.database.ref().update({
      LED_STATUS_4:1,
     }):
     fire.database.ref().update({
      LED_STATUS_4:0,
     });
     toggle_four.bind(this,LED_STATUS_4)
}


  return (
    <div className="card" id="light">
      <h2>Lights</h2>
      <div className="container_l">
        <p>Room1</p>
        <button className={`btn_${toggleState1}`} onClick={toggle_one}></button>
        <p>Room2</p>
        <button className={`btn_${toggleState2}`} onClick={toggle_two}></button>
        <p>Room3</p>
        <button className={`btn_${toggleState3}`} onClick={toggle_three}></button>
        <p>Room4</p>
        <button className={`btn_${toggleState4}`} onClick={toggle_four}></button>
      </div>
    </div>
  );
}


  export default Light;