import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import { useApiData } from "../Hooks/useApiData";

// eslint-disable-next-line react-hooks/rules-of-hooks
const firebaseConfig = useApiData()

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};