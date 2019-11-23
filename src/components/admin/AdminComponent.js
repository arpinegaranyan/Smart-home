import React, { Component } from 'react';
import Form from '../Form/Form_admin.js';
// used styles
import '../../css/admin/App.css';
// used components;

export default class AdminComponent extends Component {
    render() {
        return (
            <div className={"admin-content"}>
                <div className="app1" >
                    <div className="app_header1">
                        <h2>
                            Smart Home Support System
                        </h2>
                    </div>
                    <div className="app_list1">
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}