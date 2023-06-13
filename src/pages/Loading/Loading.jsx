import React from 'react'

// style
import styles from './Loading.module.css'

const Loading = () => {
  return (
    <div className={styles.container}>
      <p className={styles.loadingText}>Carregando seus dados...</p>
    </div>
  )
}

export default Loading