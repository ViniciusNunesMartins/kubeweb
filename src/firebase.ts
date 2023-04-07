import firebase, { FirebaseOptions } from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig : FirebaseOptions = {
	apiKey: process.env.FIREBASE_APIKEY,
	authDomain: process.env.FIREBASE_AUTH_DOMAIN,
	projectId: process.env.FIREBASE_PROJECT_ID,
	storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIREBASE_APP_ID,
	measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

if (!firebase.getApps().length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseApp = firebase.getApp();

export default firebase;
