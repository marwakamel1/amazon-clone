import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDjcaHnX7gvpCQzUZAHCmtQvaq_BtQwddU",
  authDomain: "clone-d007d.firebaseapp.com",
  databaseURL: "https://clone-d007d.firebaseio.com",
  projectId: "clone-d007d",
  storageBucket: "clone-d007d.appspot.com",
  messagingSenderId: "823448315894",
  appId: "1:823448315894:web:71bde4255129a36b6909d7",
  measurementId: "G-T25F7BB978",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
