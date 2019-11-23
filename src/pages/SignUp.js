import React from 'react';
import '../css/signUp/style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Header from '../components/layouts/main/Header';
import SignUpComponent from "../components/SignUp/SignUpComponent";
import HeaderText from "../components/Home/HeaderText";
import Footer from '../components/layouts/main/Footer';
import Support from "../components/support/Sopport";


function SignUp  ()  {
     return (
        <div className={"sign-up-container"}>
            <div id="header" className={"header-sign-up"}>
                <Header/>
                <HeaderText/>
            </div>
            <div className={"sign-up-content"}>
                <div className="sign-up-title">
                    - Sign Up -
                </div>
                <SignUpComponent />
            </div>
            <div className={"support-content"}>
                <Support />
            </div>
            <Footer />
        </div>
    );

}

export default SignUp;