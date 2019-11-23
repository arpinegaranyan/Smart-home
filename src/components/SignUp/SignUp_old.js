import React,{ useState } from 'react';
import { Redirect } from "react-router-dom";
import { Modal, Form, Button, Alert }  from 'react-bootstrap';
import useForm from "react-hook-form";
import { useListener } from 'react-bus';
import { ToastContainer, toast } from 'react-toastify';
import Firebase  from "../../firebase_";

function SignUp  ()  {
    // Component local data
    const [show, setShow] = useState(false);
    const [fbError, setFbError] = useState('');
    const [userId, setUserId] = useState('');
    const [userPage, setUserPage] = useState(false);
    // Event bus
    const showModal = React.useCallback(function (show) {
        setShow(show);
    }, []);

    useListener('show-sign-up-modal', showModal);
    // Event bus part end

    // Form part
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        let database = Firebase.database.ref();
        Firebase.doCreateUserWithEmailAndPassword(data.email, data.password).then(response => {
            // after registration add user data to the database
            let uid = response.user.uid;
            setUserId(uid);
            database.child("users").child(uid).set({
                first_name: data.first_name,last_name: data.last_name,email: data.email, role: data.role
            }).then(() => {
                toast.success("Your registration has forgiven successfully !");
                setTimeout(function () {
                    setUserPage(true);
                },5000);
            }).catch(error => {
                console.log('error',error);
            });
        }).catch(error => {
            console.log('error',error);
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
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="sign-up-modal"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="login-title">
                        Sign Up
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="signUp" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formLoginFirstName">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" name="first_name" ref={register({required: true})}/>
                            <Form.Control.Feedback type="invalid" >
                                {errors.first_name && 'First Name field is required.'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formLoginLastName">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" name="last_name" ref={register({required: true})}/>
                            <Form.Control.Feedback type="invalid" >
                                {errors.last_name && 'Last Name field is required.'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formLoginEmail">
                            <Form.Label>Email address:</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                            <Form.Control.Feedback type="invalid" >
                                {errors.email && 'Incorrect email address.'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formLoginPassword">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, minLength: 6, maxLength: 32 })}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.password && 'Invalid password. Password must be longer than 6 characters !'}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formLoginRole">
                            <Form.Control type="hidden"  name="role" defaultValue={2} ref={register}/>
                        </Form.Group>
                        <Form.Group>
                            {fbError !== '' &&
                            <Alert key="fb-error" variant="danger">
                                {fbError}
                            </Alert>
                            }
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-secondary' onClick={() => setShow(false)}>Cancel</Button>
                    <Button variant="primary" type="submit" form="signUp">Sign Up</Button>
                </Modal.Footer>
            </Modal>
        </>
    );

};
export default SignUp;