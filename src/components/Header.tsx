import React from 'react'
import styles from '../styles/Header.module.css'

// TODO: need to fix this type
function Header({ title }: any) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header