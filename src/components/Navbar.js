import React from 'react'
// Hooks
import { NavLink } from 'react-router-dom'
// css
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
            Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
            Sobre
          </NavLink>
        </li>

        <li>
          <NavLink to="/singin" className={({ isActive }) => (isActive ? styles.active : "")}>
            Login
          </NavLink>
        </li>

        <li>
          <NavLink to="/singup" className={({ isActive }) => (isActive ? styles.active : "")}>
            Cadastro
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar