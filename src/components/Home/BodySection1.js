import React, {Component, useState} from 'react';
import { Row, Col }  from 'react-bootstrap';
import CarouselComponent from "../carousel/CarouselComponent";

export default function BodySection1 (){

    let initStyle1 = {
        info1: true,
        infoStyle1: "50px",
    };
    let initStyle2 = {
        info2: true,
        infoStyle2: "50px"
    };

    const [infoStyle1,setInfoStyle1] = useState(initStyle1);
    const [infoStyle2,setInfoStyle2] = useState(initStyle2);

    const showMore = (text) => {
        if(text === 1){
            setInfoStyle1(infoStyle1=>{
                infoStyle1 = {
                    info1: false,
                    infoStyle1: "auto",
                };
                return infoStyle1;
            });
        }else if(text === 2){
            setInfoStyle2(infoStyle2=>{
                infoStyle2 = {
                    info2: false,
                    infoStyle2: "auto",
                };
                return infoStyle2;
            });
        }
    };

    const hideText = (text) =>{
        if(text === 1){
            setInfoStyle1(infoStyle1=>{
                infoStyle1 = {
                    info1: true,
                    infoStyle1: "50px",
                };
                return infoStyle1;
            });
        }else if(text === 2){
            setInfoStyle2(infoStyle2=>{
                infoStyle2 = {
                    info2: true,
                    infoStyle2: "50px",
                };
                return infoStyle2;
            });
        }
    };

    return(
        <div id="div3">
            <div id="sectionText">
                <Row className={"delete-default-style info-text-body"}>
                    <Col lg={{size:6}} md={{size:6}} sm={{size:6}} xs={{size:6}} className={"delete-default-style"}>
                        <div className={"info-text-content"}>
                            <ul className={"info-ul"}>
                                <li>
                                    <p style={{height: infoStyle1.infoStyle1}}>
                                        At the heart of a connected home is your broadband, which your devices use to go online and
                                        communicate with you and each other. Some devices connect via Ethernet, but the majority use
                                        wi-fi, so stable wi-fi is crucial to a smart home.<br />
                                        If your broadband is the heart of your network, your smartphone is the control. Connected devices
                                        come with apps you can use to control them from remotely anywhere - as long as you have an internet
                                        connection.
                                    </p>
                                    {infoStyle1.info1 ?
                                        <span onClick={()=>showMore(1)} >More Info</span>
                                        : <span onClick={()=>hideText(1)}>Hide</span>
                                    }
                                </li>
                                <li>
                                    <p style={{height: infoStyle2.infoStyle2}}>
                                        Home robots and security: a household security system integrated with a home automation system can
                                        provide additional services such as remote surveillance of security cameras over the Internet, or
                                        access control and central locking of all perimeter doors and windows.
                                    </p>
                                    {infoStyle2.info2 ?
                                        <span onClick={()=>showMore(2)} >More Info</span>
                                        : <span onClick={()=>hideText(2)}>Hide</span>
                                    }
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
} 