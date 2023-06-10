import React from 'react'

import styles from './Cadastro.module.css'

const Cadastro = () => {
  return (
    <div className={styles.container}>
      <h1>Cadastre-se para Postar</h1>
      <p>Crie seu usuario e compartilhe suas historias</p>
      <form className={styles.formulario}>
        <label>
          <span>nome: </span>
          <input type="text" name='displayname' required placeholder='Nome de usuario'/>
        </label>

        <label>
          <span>E-mail: </span>
          <input type="email" name='email' required placeholder='Email de usuario'/>
        </label>

        <label>
          <span>Senha: </span>
          <input type="text" name='senha' required placeholder='senha de usuario'/>
        </label>

        <label>
          <span>confirme a senha: </span>
          <input type="text" name='confirmarSenha' required placeholder='senha de usuario'/>
        </label>

        <label>
          <input type="submit" value="Cadastrar" className="btn" />
        </label>
      </form>
    </div>
  )
}

export default Cadastro