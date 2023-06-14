import React from 'react'

// Styles
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2>Algo de errado não esta certo :(</h2>
      <h5 className={styles.aviso}>Essa rota não existe...</h5>
    </div>
  )
}

export default NotFound