import React, {Component} from "react";

// import Header from "./Header";
import Header from "../components/layouts/main/Header";
import HeaderText from "../components/Home/HeaderText";
import MainBody from "../components/Home/MainBody";
import BodySection1 from "../components/Home/BodySection1";
import BodySection2 from "../components/Home/BodySection2";
import Support from "../components/support/Sopport";
import Footer from "../components/layouts/main/Footer";

class Home extends Component{
    render(){
        return(
            <>
                <div id="header">
                    <Header/>
                    <HeaderText/>
                </div>
                <div id="main">
                    <div id="container1">
                        <MainBody/>
                    </div>
                    <div id="container2">
                        <BodySection1/>
                        <BodySection2/>
                    </div>
                </div>
                <div className={"support-content"}>
                    <Support />
                </div>
                <div id="container3">
                    <Footer/>
                </div>
            </>
        )
    }
}

export default Home;