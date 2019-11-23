import firebase1 from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyB6z8F1miQGZeEDKvB8VU7VlUg-nuvcXjQ",
    authDomain: "my-project-b0afe.firebaseapp.com",
    databaseURL: "https://my-project-b0afe.firebaseio.com",
    projectId: "my-project-b0afe",
    storageBucket: "my-project-b0afe.appspot.com",
    messagingSenderId: "858723963959",
    appId: "1:858723963959:web:cb87dbae81a7b2f1a29bb2"
  };
  // Initialize Firebase
  let fire = firebase.initializeApp(firebaseConfig);

  export default fire;