import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyA_EXw_zIFGatNfHJlS8nytMs4K7MXdK1A",
  authDomain: "miniblog-78a26.firebaseapp.com",
  projectId: "miniblog-78a26",
  storageBucket: "miniblog-78a26.appspot.com",
  messagingSenderId: "566753725639",
  appId: "1:566753725639:web:66e5d788cb338bbe2902e2"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};