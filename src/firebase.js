// Import firebase
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration, you have to paste here the object that comes from firebase


const firebaseConfig = {
    apiKey: "AIzaSyDP9q2kx5CO5Y4Ti_a4FRVG4C9QOZVzGhM",
    authDomain: "dmi2-4b2ca.firebaseapp.com",
    databaseURL: "https://dmi2-4b2ca-default-rtdb.firebaseio.com",
    projectId: "dmi2-4b2ca",
    storageBucket: "dmi2-4b2ca.appspot.com",
    messagingSenderId: "349273545729",
    appId: "1:349273545729:web:f76a75fca0677cc5ceb400"
};

// Initialize Firebase
let app;





if (firebase.apps.length === 0) {
    console.info({ firebase });
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app();
}
const messaging = firebase.messaging();
messaging.getToken({ vapidKey: 'BPyWn4m9yiCCItKhUuaaf5mkhisrat7dxNRVwuDy0cm5uVvgp8ZaHqsf5OVZ-yFf-H2G-BVwQNSTJiYsXC8-nnI' }).then((currentToken) => {
  if (currentToken) {
    // Send the token to your server and update the UI if necessary
    // ...
    console.log(currentToken);
  } else {
    // Show permission request UI
    console.log('No registration token available. Request permission to generate one.');
    // ...
  }
}).catch((err) => {
  console.log('An error occurred while retrieving token. ', err);
  // ...
});

const storage = firebase.storage();

const db = firebase.database();

const auth = firebase.auth();

export { auth, storage, db, firebase };