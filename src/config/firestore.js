import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH8WaoTrjuRtPxFSE5bU4WveV8hEn_RnA",
  authDomain: "proyecto-04-c17d5.firebaseapp.com",
  projectId: "proyecto-04-c17d5",
  storageBucket: "proyecto-04-c17d5.appspot.com",
  messagingSenderId: "821780353566",
  appId: "1:821780353566:web:5842e0e6ed1f0e7ebdd40f"
};

const firebaseApp = initializeApp( firebaseConfig );
export const db = getFirestore( firebaseApp );