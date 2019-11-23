import React, { Component } from 'react';

// used styles
import '../css/contacts/style.css';
import '../css/users/style.css';

// used components
import Contacts from '../components/users/Contacts';
import RightMenu from "../components/users/RightMenu";
import Support from "../components/support/Sopport";

export default class UsersContacts extends Component {
    render() {
        return (
            <div className="users-container">
                <div>
                    <RightMenu />
                    <Contacts />
                </div>
                <div className={"support-content"}>
                    <Support />
                </div>
            </div>
        );
    }
}