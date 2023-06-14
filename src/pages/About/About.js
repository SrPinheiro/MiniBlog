import React from 'react'
// css
import styles from './About.module.css'
import './About.module.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sobre o Mini <span>Blog</span></h2>
      <div className={styles.textContainer}>
        <p>Este é um projeto de blog desenvolvido com React e Firebase, criado exclusivamente para fins de aprendizado. Utilizando o React no front-end e o Firebase como backend, explorei essas tecnologias para aprimorar minhas habilidades de desenvolvimento web. Embora o blog não esteja planejado para ser lançado oficialmente, ele serviu como uma oportunidade valiosa para experimentar recursos e funcionalidades dessas ferramentas. Através deste projeto, adquiri conhecimento prático em React e Firebase, preparando-me para futuros desafios no desenvolvimento web.</p>
      </div>
      

      <Link to="/posts/create" className='btn'>Criar Post</Link>
    </div>
  )
}

export default About