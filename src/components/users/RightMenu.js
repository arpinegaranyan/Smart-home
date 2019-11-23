import React, {useEffect, useState} from 'react';
import { NavLink, Redirect, useParams, useLocation, matchPath } from "react-router-dom";
import Logo from "./img/logo.png";
import Firebase from "../../firebase_";
import { ToastContainer, toast } from 'react-toastify';


function RightMenu (){

    const [homePage, setHomePage] = useState(false);
    const [closeContacts, setCloseContacts] = useState(true);
    const SignOut = (e) => {
        e.preventDefault();
        Firebase.doSignOut();
        setHomePage(true);
    };
    useEffect(() => {
        let currentUser = Firebase.getCurrentUser();
        if(match.path === '/admin'){
            setCloseContacts(false);
        }
        return function cleanUp() {

        }
    },[]);

    // get users or admin data by id
    let { pathname } = useLocation();
    let pattern = ['/user','/admin'];
    const match = matchPath(pathname, { path: pattern }) || {};

    let { id } = useParams();
    let database = {};
    if(match.path === '/admin'){
        database = Firebase.database.ref(`admin/${id}`);
    }else if(match.path === '/user'){
        database = Firebase.database.ref(`users/${id}`);
    }else{
        database = Firebase.database.ref(`users/${id}`);
    }

    database.on("value", function(snapshot) {
        if(!snapshot.val()){
            toast.warn("Such user was not found in the database !");
            Firebase.doSignOut();
            setTimeout(function () {
                setHomePage(true);
            },3000);
        }
    }, function (error) {
        console.log("Error: " + error.code);
    });
    // Redirect to home page
    if (homePage === true) {
        return <Redirect to="/" />
    }


    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2900}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
            />
            <div className="sidenav">
                <img src={Logo} id="logo_user" alt={"logo"}/>
                <NavLink to={`/user/${id}`} exact >Home</NavLink>
                { closeContacts ?
                    <NavLink to={`/contact/${id}`} >Contacts</NavLink>
                    : <></>
                }
                <a className="p sign-out-a links" href="/" onClick={SignOut}>Sign out</a>
            </div>
        </>
    )
}

export default RightMenu;