import React from 'react'
// css
import  styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h3>Escreva sobre o que você tem interrese!</h3>
      <p>Mini Blog &copy; 2023</p>
      <p>Leonardo Pinheiro</p>
    </footer>
  )
}

export default Footer