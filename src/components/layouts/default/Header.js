import React, {useEffect, useState} from 'react';
import { NavLink, Redirect, useParams, useLocation, matchPath } from "react-router-dom";
import Firebase  from "../../../firebase_";
import logo from "../../Home/Design_MainPage/logo.png";
import { ToastContainer, toast } from 'react-toastify';

function  Header () {
// Component local data
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
    });

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
    }

    database.on("value", function(snapshot) {
        console.log(snapshot.val());
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
        <div id="header-content">
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
            <>
                <div id="menubar">
                    <div className={"links-content"}>
                        <div className = "logo">
                            <img id="logo" src={logo} alt={"logo"}/>
                        </div>
                        <div className={"links-part"}>
                            <NavLink to={`/user/${id}`} exact className="links">HOME</NavLink>
                            { closeContacts ?
                                <NavLink to={"/contacts"} className="links">CONTACTS</NavLink>
                                : null
                            }
                            <a className="p sign-out-a links" href="/" onClick={SignOut}>SIGN OUT</a>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default Header;




