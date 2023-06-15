//  Hooks
import { useEffect, useState, useReducer } from "react";
import {db} from '../firebase/config'
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null
}

const insertReducer = (state, action) => {
  switch (action.type) {
      case "LOADING":
        return {loading: true, error: null }
      case "INSERTED_DOC":
        return{loading: false, error: null}
      case "ERROR":
        return {loading: false, error: action.payload}
      default:
        return state
    }

}

export const useInsertDocument = (docCollection) => {
  const [response, dispatch] = useReducer(insertReducer, initialState)

  // Memory Leak
  const [canceled, setCanceled] = useState(false)

  function checkIfCanceled(action) {
    if(!canceled){
      dispatch(action)
    }
  }

  const insertDocument = async(doc) => {
    try{
      const newDocument = {...doc, createdAt: Timestamp.now()}

      const insertedDocument = await addDoc(collection(db, docCollection), newDocument)

      checkIfCanceled({type: "", payload: insertedDocument})

    }catch(error){

    }
  }
}