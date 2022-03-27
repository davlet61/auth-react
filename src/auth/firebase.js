import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from './config.js';

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;

console.log(process.env.REACT_APP_FIREBASE_API_KEY);
