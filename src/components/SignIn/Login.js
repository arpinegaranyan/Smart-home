import React,{ useState } from 'react';
import { Redirect } from "react-router-dom";
import { Form, Button, Alert }  from 'react-bootstrap';
import useForm from "react-hook-form";
import Firebase  from "../../firebase_";

function    LogIn  ()  {
    // Component local data
    const [fbError, setFbError] = useState('');
    const [adminId, setAdminId] = useState('');
    const [adminPage, setAdminPage] = useState(false);
    const [userId, setUserId] = useState('');
    const [userPage, setUserPage] = useState(false);

    // Form part
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        Firebase.doSignInWithEmailAndPassword(data.email,data.password).then(response => {
            let uid = response.user.uid;
            if(data.role === '2'){
                setUserId(uid);
                setUserPage(true);
            }else if(data.role === '1'){
                setAdminId(uid);
                setAdminPage(true);
            }
        }).catch(error => {
            console.log('error',error);
            setFbError(fbError => {
                fbError = error.message;
                return fbError;
            });
        });
    };
    // Form part END

    // Redirect to admin page
    if (adminPage === true) {
        return <Redirect to={`/admin/${adminId}`}/>
    }
    // Redirect to user page
    if (userPage === true) {
        return <Redirect to={`/user/${userId}`}/>
    }

    return (
        <>
            <div id="login-title">
                Login
            </div>
            <Form id="login" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="formLoginEmail" className="menu-item">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})}/>
                    <Form.Control.Feedback type="invalid" >
                        {errors.email && 'Incorrect email address.'}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formLoginPassword" className="menu-item">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, minLength: 6, maxLength: 32 })}/>
                    <Form.Control.Feedback type="invalid">
                        {errors.password && 'Invalid password. Password must be longer than 6 characters !'}
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="formLoginRole" className="menu-item">
                    <Form.Label>Select role</Form.Label>
                    <Form.Control as="select" name="role" ref={register({ required: true})}>
                        <option value={2}>User</option>
                        <option value={1}>Admin</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    {fbError !== '' &&
                    <Alert key="fb-error" variant="danger">
                        {fbError}
                    </Alert>
                    }
                </Form.Group>
                <Form.Group className="menu-item">
                    <Button variant="primary" type="submit" form="login">Login</Button>
                </Form.Group>
            </Form>
        </>
    );

};
export default LogIn;