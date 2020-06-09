/* eslint-disable no-undef */
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
    databaseURL: `${process.env.REACT_APP_FIREBAE_DATA_BASE_URL}`,
    projectId: `${process.env.REACT_APP_FIREBAE_PROJECT_ID}`,
    storageBucket: `${process.env.REACT_APP_FIREBAE_STORAGE_BUCKET_ID}`,
    messagingSenderId: `${process.env.REACT_APP_FIREBAE_MESSANGER_SENDING_ID}`,
    appId: `${process.env.REACT_APP_FIREBAE_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBAE_MEASUREMENT_ID}`
};
const fireBaseLib = firebase.initializeApp(firebaseConfig);
export default fireBaseLib;