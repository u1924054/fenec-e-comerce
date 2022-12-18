import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDaRQiEmIAN47Bz-v_bQjawXglRsdTgEQA",
  authDomain: "fenectienda.firebaseapp.com",
  projectId: "fenectienda",
  storageBucket: "fenectienda.appspot.com",
  messagingSenderId: "114235965949",
  appId: "1:114235965949:web:7b304999cc48cebcb31994"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
