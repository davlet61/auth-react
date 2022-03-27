import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { firebaseConfig } from './config';

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
