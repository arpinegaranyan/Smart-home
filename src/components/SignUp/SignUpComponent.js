import React,{ useState } from 'react';
import { Redirect } from "react-router-dom";
import { Form, Button, Alert }  from 'react-bootstrap';
import useForm from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import Firebase  from "../../firebase_";

// used components
import Loader from 'react-loader-spinner';

function SignUpComponent() {
    // Component local data
    const [fbError, setFbError] = useState('');
    const [userId, setUserId] = useState('');
    const [userPage, setUserPage] = useState(false);
    const [showLoader, setShowLoader] = useState(false);

    let val_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Form part
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        setShowLoader(true);
        let database = Firebase.database.ref();
        Firebase.doCreateUserWithEmailAndPassword(data.email, data.password).then(response => {
            // after registration add user data to the database
            let uid = response.user.uid;
            setUserId(uid);
            database.child("users").child(uid).set({
                first_name: data.first_name, last_name: data.last_name, email: data.email, role: data.role
            }).then(() => {
                setShowLoader(false);
                toast.success("Your registration has forgiven successfully !");
                setTimeout(function () {
                    setUserPage(true);
                }, 5000);
            }).catch(error => {
                setShowLoader(false);
                console.log('error', error);
            });
        }).catch(error => {
            setShowLoader(false);
            console.log('error', error);
            setFbError(fbError => {
                fbError = error.message;
                return fbError;
            });
        });

    };
    // Form part END

    // Redirect to user page
    if (userPage === true) {
        return <Redirect to={`/user/${userId}`}/>
    }

    return (
        <>
            { showLoader &&
                <div className={"loader-content"}>
                    <Loader type="Triangle" color="#1079f8" height={150} width={150} />
                </div>
            }
            <div className={"sign-up-body"}>
                <ToastContainer
                    position="top-center"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
                />
                <Form id="signUp" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="formLoginFirstName">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" name="first_name"
                                      ref={register({required: true})}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.first_name && 'First Name field is required.'}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formLoginLastName">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" name="last_name"
                                      ref={register({required: true})}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.last_name && 'Last Name field is required.'}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formLoginEmail">
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email"
                                      ref={register({required: true, pattern: val_email})}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.email && 'Incorrect email address.'}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formLoginPassword">
                        <Form.Label>Password:</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password"
                                      ref={register({required: true, minLength: 6, maxLength: 32})}/>
                        <Form.Control.Feedback type="invalid">
                            {errors.password && 'Invalid password. Password must be longer than 6 characters !'}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formLoginRole">
                        <Form.Control type="hidden" name="role" defaultValue={2} ref={register}/>
                    </Form.Group>
                    <Form.Group>
                        {fbError !== '' &&
                        <Alert key="fb-error" variant="danger">
                            {fbError}
                        </Alert>
                        }
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" form="signUp">Sign Up</Button>
                    </Form.Group>
                </Form>
            </div>
        </>

    );

}

export default SignUpComponent;