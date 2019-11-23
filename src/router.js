import React, {Suspense, lazy} from 'react';
import {Route, Switch} from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

// components list
import Loader from 'react-loader-spinner';
const Home = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/Users"));
const Admin = lazy(() => import("./pages/Admin"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Contacts = lazy(() => import("./pages/Contacts"));
const UsersContacts = lazy(() => import("./pages/UsersContacts"));

const routes = (
    <Suspense fallback={<div className={"main-loader"}><Loader type="Triangle" color="#1079f8" height={150} width={150}/></div>}>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contacts" component={Contacts}/>
            <Route path="/contact/:id" component={UsersContacts}/>
            <Route path="/signup" component={SignUp}/>
            <Route path="/user/:id" component={Users}/>
            <Route path="/admin/:id" component={Admin}/>
        </Switch>
    </Suspense>
);

export default routes