import { initializeApp } from 'firebase/app';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDeKIkiUOWZnQqAvc2SHliQE1_11vf8vrI',
  authDomain: 'zenith-clothing-db.firebaseapp.com',
  projectId: 'zenith-clothing-db',
  storageBucket: 'zenith-clothing-db.appspot.com',
  messagingSenderId: '54019785577',
  appId: '1:54019785577:web:8d8cf456bbfd30c102b3f8',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};
