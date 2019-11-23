import React, { useState } from 'react';
import { Row, Col }  from 'react-bootstrap';
import CarouselComponent from '../carousel/CarouselComponent';

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
        <div id="div4">
            <Row className={"delete-default-style info-text-body"}>
                <Col lg={{size:6}} md={{size:6}} sm={{size:6}} xs={{size:6}} className={"delete-default-style"}>
                    <div className={"info-text-content"}>
                        <ul className={"info-ul"}>
                            <li>
                                <p style={{height: infoStyle1.infoStyle1}}>
                                    Having a home security system should be a necessity in today’s world. Without a security system, you
                                    put your family and property at risk. In fact, homes are 300% more likely to be burglarized if they
                                    don’t have alarms, according to Alarms.org. When getting a home security system, one of the questions
                                    customers have on their mind is if they need a phone line. Since many people don’t have a landline
                                    these days, they may be wondering about their options when it comes to securing their home. Don’t worry;
                                    there are options for home security systems without phone lines!
                                </p>
                                {infoStyle1.info1 ?
                                    <span onClick={()=>showMore(1)} >More Info</span>
                                    : <span onClick={()=>hideText(1)}>Hide</span>
                                }
                            </li>
                            <li>
                                <p style={{height: infoStyle2.infoStyle2}}>
                                    24/7 home security monitoring connects you to your security system via any web-enabled computer or mobile
                                    device. No matter where you are, you have secure access to your home, allowing you to monitor and control
                                    your security system, whether by viewing pictures or watching live video of your home, or setting up a
                                    schedule to turn on the lights, at any time, day or night. Basically, 24/7 monitoring gives you direct and
                                    immediate access to your security system, and in the case of a triggered sensor in your home, an alarm
                                    signal is sent to you and, if needed, emergency services are alerted and will be on their way.
                                </p>
                                {infoStyle2.info2 ?
                                    <span onClick={()=>showMore(2)} >More Info</span>
                                    : <span onClick={()=>hideText(2)}>Hide</span>
                                }
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col lg={{size:6}} md={{size:6}} sm={{size:6}} xs={{size:6}} className={"delete-default-style"}>
                    <div className={"carousel-content"}>
                        <div id="text">
                            <h1>- Application features -</h1>
                            <p id="firstText">Manage your home using the website</p>
                        </div>
                        <CarouselComponent/>
                    </div>
                </Col>
            </Row>
        </div>
    )
} 