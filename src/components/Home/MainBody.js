import React from 'react';
import { Row, Col }  from 'react-bootstrap';
import icon1 from './Design_MainPage/icon1.png';
import icon2 from './Design_MainPage/icon2.png';
import icon3 from './Design_MainPage/icon3.png';
import icon4 from './Design_MainPage/icon4.png';
import empty from './Design_MainPage/icon_empty.png';

function MainBody () {

    return(
        <Row>
            <Col lg={6} md={6} sm={6} xs={6} id="div1">
                <Row>
                    <Col lg={{size:6}} md={{size:6}} sm={{size:6}} xs={{size:6}} className="shield shieldsLeft" id="shield1">
                        <img id="img1" src={icon1} alt="icon1"/>
                        <div id="img1Empty">
                            <img id="image1Empty" src={empty} alt="icon_empty"/>
                            <h1 className = "des">WIFI Connection</h1>
                        </div>
                    </Col>
                    <Col lg={{size:6}} md={{size:6}} sm={{size:6}} xs={{size:6}} className="shield shieldsLeft" id="shield2">
                        <img id="img2" src={icon2} alt="icon2"/>
                        <div id="img2Empty">
                            <img id="image2Empty" src={empty} alt="icon_empty"/>
                            <h1 className = "des">Access Control</h1>
                        </div>
                    </Col>
                </Row>
            </Col>
            <Col lg={6} md={6} sm={6} xs={6} id="div2">
                <Row>
                    <Col lg={{size:6}} md={{size:6}} sm={{size:6}} xs={{size:6}} className="shield shieldsRight" id="shield3">
                        <img id="img3" src={icon3} alt="icon3"/>
                        <div id="img3Empty">
                            <img id="image3Empty" src={empty} alt="icon_empty"/>
                            <h1 className = "des">No Phone <br /> Line Needed</h1>
                        </div>
                    </Col>
                    <Col lg={{size:6}} md={{size:6}} sm={{size:6}} xs={{size:6}} className="shield shieldsRight" id="shield4">
                        <img id="img4" src={icon4} alt="icon4"/>
                        <div id="img4Empty">
                            <img id="image4Empty" src={empty} alt="icon_empty"/>
                            <h1 className = "des">24/7 monitoring</h1>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default MainBody;