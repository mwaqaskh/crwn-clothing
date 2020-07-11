import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBCFjfgQmTuamKzXQNHO590eScMMvcMpg",
  authDomain: "crwn-db-9955a.firebaseapp.com",
  databaseURL: "https://crwn-db-9955a.firebaseio.com",
  projectId: "crwn-db-9955a",
  storageBucket: "crwn-db-9955a.appspot.com",
  messagingSenderId: "915686920861",
  appId: "1:915686920861:web:9ce37946164635d1ee3a74",
  measurementId: "G-Y8MRM6XBSS",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error creation user", error.message);
    }
  }
  return userRef;
};
