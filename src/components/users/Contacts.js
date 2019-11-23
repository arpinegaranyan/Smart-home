import React from 'react';
// used styles
import '../../css/users/App.css';

// used components;
import ContactsComponent from "../Contacts/ContactsComponent";

function Contacts () {

    return (
        <>
            <div className="grid-container-users">
                <div className={"users-contacts"}>
                    <ContactsComponent />
                </div>
            </div >
        </ >
    )
}

export default Contacts;