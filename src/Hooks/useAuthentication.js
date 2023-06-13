import {db} from '../firebase/config'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  // cleanup
  // deal with memory leak
  const [canceled, setCanceled] = useState(false)

  const auth = getAuth()

  function checkIfIsCanceled(){
    if(canceled){
      return
    }
  }

  const createUser = async(data) => {
     checkIfIsCanceled()

     setLoading(true)

     try{
        const {user} = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.senha
        )

        await updateProfile(user, {displayName: data.displayName})
        setLoading(false)
        return user;

     }catch(error){      
      let systemErrorMessage

      if(error.message.includes("Password")){
        systemErrorMessage = "Erro de senha, a senha deve conter ao menos 6 caracteres"

      }else if(error.message.includes("email-already")){
        systemErrorMessage = "email ja cadastrado"
      }else{
        systemErrorMessage = "erro de sistema, volte mais tarde"
      }

      setError(systemErrorMessage)
      setLoading(false)
     }

  }

  const logInUser = async(data) => {
    checkIfIsCanceled()

    setLoading(true)

    try{

      const {user} = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.senha
      )

      setLoading(false)
      return user;

    }catch(error){
      let systemErrorMessage
      
      if(error.message.includes("user-not-found")){
        systemErrorMessage = "Usuário não encontrado"

      }else if(error.message.includes("wrong-password")){
        systemErrorMessage = "Senha ou email errados :("

      }else if(error.message.includes("Access to this account has been temporarily disabled due to many failed login attempts")){
        systemErrorMessage = "Este usuario foi bloqueado devido a varias tentativas falhas de se conectar."
      }
      else{
        systemErrorMessage = "Ouve algum problema, tente novamente mais tarde!"
      }

      setError(systemErrorMessage)
      setLoading(false)
    }
  }

  useEffect(() => {
    return ()=> setCanceled(true)

  }, [])
  return {
    auth,
    createUser,
    error,
    loading,
    logInUser
  }
}