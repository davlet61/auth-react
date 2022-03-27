import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './config';

const app = initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
