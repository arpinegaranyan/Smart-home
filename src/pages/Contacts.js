import React from 'react';
import '../css/contacts/style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Header from '../components/layouts/main/Header';
import HeaderText from "../components/Home/HeaderText";
import ContactsComponent from "../components/Contacts/ContactsComponent";
import Footer from '../components/layouts/main/Footer';
import Support from "../components/support/Sopport";


function Contacts  ()  {
     return (
        <div className={"contacts-container"}>
            <div id="header" className={"header-contacts"}>
                <Header/>
                <HeaderText/>
            </div>
            <div className={"contacts-content"}>
                <div className="contacts-title">
                    - Have Some Questions? -
                </div>
                <ContactsComponent />
            </div>
            <div className={"support-content"}>
                <Support />
            </div>
            <Footer />
        </div>
    );

}

export default Contacts;