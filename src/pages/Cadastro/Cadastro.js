import React, { useEffect, useState } from 'react'
import styles from './Cadastro.module.css'
import { useAuthentication } from '../../Hooks/useAuthentication'

const Cadastro = () => {
  const [userData, setUserData] = useState({displayName: "", email: "", senha: "", confirmarSenha: ""})
  const [error, setError] = useState("")

  const {createUser, error: authError, loading} = useAuthentication()

  const handleSubmit = async(e) => {
    e.preventDefault();

    setError("")

    if(!(userData.confirmarSenha === userData.senha)){
      setError("As senhas precisam ser iguais!")
      return
    }

    const user = {...userData}
    delete user.confirmarSenha

    const resp = await createUser(user)
  }

  useEffect(() => {
    setError(authError);
  },[authError])

  const handleUpdateUserData = e => {
    setUserData(oldState => ({...oldState, [e.target.name]: e.target.value}));
  };
  

  return (
    <div className={styles.cadastro}>
      <h1>Cadastre-se para Postar</h1>
      <p>Crie seu usuario e compartilhe sua historia</p>
      <form className={styles.formulario} onSubmit={handleSubmit}>
        <label>
          <span>nome: </span>
          <input type="text" name='displayName' required placeholder='Nome de usuario' value={userData.displayName} onChange={handleUpdateUserData}/>
        </label>

        <label>
          <span>E-mail: </span>
          <input type="email" name='email' required placeholder='Email de usuario' value={userData.email} onChange={handleUpdateUserData}/>
        </label>

        <label>
          <span>Senha: </span>
          <input type="password" name='senha' required placeholder='senha de usuario' value={userData.senha} onChange={handleUpdateUserData}/>
        </label>

        <label>
          <span>confirme a senha: </span>
          <input type="password" name='confirmarSenha' required placeholder='senha de usuario' value={userData.confirmarSenha} onChange={handleUpdateUserData} />
        </label>

        {error && <p className='error'>{error}</p>}
        <label>
         {!loading && <input type="submit" value="Cadastrar" className="btn" />} 
         {loading && <input type="button" disabled value="Aguarde..." className="btn" />}
        </label>
      </form>
    </div>
  )
}

export default Cadastro