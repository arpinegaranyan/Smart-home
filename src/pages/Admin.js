import React, { Component } from 'react';

// used styles
import '../css/admin/style.css';
// used components
import Header from '../components/layouts/default/Header';
import AdminComponent from '../components/admin/AdminComponent';
import Footer from '../components/layouts/default/Footer';

export default class Admin extends Component {
    render() {
        return (
            <div className="admin-container">
                <Header />
                <AdminComponent />
                <Footer />
            </div>
        );
    }
}