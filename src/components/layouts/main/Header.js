import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import Login from '../../SignIn/Login';
import logo from "../../Home/Design_MainPage/logo.png";
import Firebase from "../../../firebase_";
import { stack as Menu } from 'react-burger-menu';

import '../../../css/layouts/style.css';

function  Header () {

    useEffect(() => {
        let user = Firebase.getCurrentUser();
        console.log('user',user);
    });

    return (
        <div id="header-content">
            <>
                <div id="menubar">
                    <div className={"links-content"}>
                        <div className = "logo">
                            <img id="logo" src={logo} alt={"logo"}/>
                        </div>
                        <div className={"links-part"}>
                            <NavLink to={"/"} exact className="links">HOME</NavLink>
                            <NavLink to={"/contacts"} className="links">CONTACTS</NavLink>
                            <NavLink to={"/signup"} className="links">SIGN UP</NavLink>
                            <Menu right width={"500px"} noOverlay>
                                <Login/>
                            </Menu>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Header;