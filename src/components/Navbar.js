import React, { useEffect } from 'react'
// Context
import { useAuthValue } from '../context/authContext'

// Hooks
import { NavLink } from 'react-router-dom'
import { useAuthentication } from '../Hooks/useAuthentication'

// css
import styles from './Navbar.module.css'

const Navbar = () => {
  var {user} = useAuthValue();
  const {logOut} = useAuthentication()

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
        
        {!user && (
          <>
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
          </>
        )}

        {user &&(
          <>
            <li>
              <NavLink to="/posts/create" className={({ isActive }) => (isActive ? styles.active : "")}>
                Criar post
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard" className={({ isActive }) => (isActive ? styles.active : "")}>
                DashBoard
              </NavLink>
            </li>

            <li>
              <NavLink onClick={logOut}>Sair</NavLink>
            </li>
          </>
        )}

      </ul>
    </nav>
  )
}

export default Navbar