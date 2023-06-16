import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { useApiData } from "../security/useApiData";

const firebaseConfig = {
  apiKey: window.env.apiKey,
  authDomain: window.env.authDomain,
  projectId: window.env.projectId,
  storageBucket: window.env.storageBucket,
  messagingSenderId: window.env.messagingSenderId,
  appId: window.env.appId
}

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};