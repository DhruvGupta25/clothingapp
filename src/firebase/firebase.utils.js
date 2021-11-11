import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
const config = {
    apiKey: "AIzaSyBpmp_dm58WcjTM3wMu-pN_fIfL8-hFBzM",
    authDomain: "clothing-db-e171d.firebaseapp.com",
    projectId: "clothing-db-e171d",
    storageBucket: "clothing-db-e171d.appspot.com",
    messagingSenderId: "921115121192",
    appId: "1:921115121192:web:f608af2a1114d82daf871d",
    measurementId: "G-8SMG8MHC0E"
  };
   firebase.initializeApp(config);
  const firestore = firebase.firestore();
  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth ) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
     const {displayName, email } = userAuth;
     const createdAt = new Date();

     try{
      await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
      })
     }
     catch(error){
      console.log('error creating user', error.message);
     }
    }

    return userRef;
  }
   


export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
}
export default firebase;