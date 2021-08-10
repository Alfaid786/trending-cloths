import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyD68hdf2k-7jerH0B6kipBAR2PFvEhG6Ds",
  authDomain: "trending-cloths-bc5d7.firebaseapp.com",
  projectId: "trending-cloths-bc5d7",
  storageBucket: "trending-cloths-bc5d7.appspot.com",
  messagingSenderId: "997848737114",
  appId: "1:997848737114:web:ea274b6b5fd1ea566cbf63",
  measurementId: "G-F2N1M6BGWE",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (user, additionnal) => {
  if (!user) {
    return;
  }

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = user;
    const createdDate = new Date();
    try {
      userRef.set({
        displayName,
        email,
        createdDate,
        ...additionnal,
      });
    } catch (error) {
      console.log("Error in Creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth(); // for getting firebase authentication Access
export const firestore = firebase.firestore(); // for getting firebase database access

const provider = new firebase.auth.GoogleAuthProvider(); // to get the access of Google authentication
// provider.setCustomParameter({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider); // to signin with prompt

export default firebase;
