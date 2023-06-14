import React, { useEffect, useState } from 'react'
import styles from '../Cadastro/Cadastro.module.css'
import { useAuthentication } from '../../Hooks/useAuthentication'

const Login = () => {
  const [userData, setUserData] = useState({email: '', password: ''})
  const [error, setError] = useState('')
  const {error: loginError, loading, logInUser} = useAuthentication()

  const handleUpdateUserData = e => {
    setUserData({...userData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault()

    const resp = await logInUser(userData)
  }

  useEffect(()=> {
    setError(loginError)
  }, [loginError])
  return (
    <div className={styles.cadastro}>
      <h2>Faça login para explorar o impensável</h2>
      <p>Que bom ter você aqui de novo</p>

      <form onSubmit={handleSubmit}>
      <label>
          <span>E-mail: </span>
          <input type="email" name='email' required placeholder='Email de usuario' value={userData.email} onChange={handleUpdateUserData}/>
        </label>

        <label>
          <span>Senha: </span>
          <input type="password" name='senha' required placeholder='senha de usuario' value={userData.senha} onChange={handleUpdateUserData}/>
        </label>

        {error && <p className='error'>{error}</p>}
        <label>
         {!loading && <input type="submit" value="Entrar" className="btn" />} 
         {loading && <input type="button" disabled value="Aguarde..." className="btn" />}
        </label>

      </form>
    </div>
  )
}

export default Login