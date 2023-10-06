import React from 'react'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import Logo from '../Logo/Logo'
import Searchbar from '../Search/Searchbar'

function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Searchbar />
        <Button children="Give Feedback"/>
    </nav>
  )
}

export default Navbar