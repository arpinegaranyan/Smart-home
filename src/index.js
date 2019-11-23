import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';

//our page
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider as BusProvider } from 'react-bus';



ReactDOM.render(
    <BrowserRouter>
        <BusProvider>
            <App />
        </BusProvider>
    </BrowserRouter>
    , document.getElementById('root'));
