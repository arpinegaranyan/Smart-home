import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
const config = {
    apiKey: "AIzaSyB6z8F1miQGZeEDKvB8VU7VlUg-nuvcXjQ",
    authDomain: "my-project-b0afe.firebaseapp.com",
    databaseURL: "https://my-project-b0afe.firebaseio.com",
    projectId: "my-project-b0afe",
    storageBucket: "my-project-b0afe.appspot.com",
    messagingSenderId: "858723963959",
    appId: "1:858723963959:web:cb87dbae81a7b2f1a29bb2"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.database = app.database();
    }

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    getCurrentUser = () => this.auth.currentUser;
}

let FB = new Firebase();
export default FB;