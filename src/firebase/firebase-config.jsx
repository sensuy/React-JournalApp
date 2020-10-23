import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
	apiKey: "AIzaSyCkZ5sZGhtOokKlejBREsxWF7duoYHKvR0",
	authDomain: "reactprojects-21882.firebaseapp.com",
	databaseURL: "https://reactprojects-21882.firebaseio.com",
	projectId: "reactprojects-21882",
	storageBucket: "reactprojects-21882.appspot.com",
	messagingSenderId: "51150593429",
	appId: "1:51150593429:web:a54321e66ba33efaeeaa9c"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
	db,
	googleAuthProvider,
	firebase
}