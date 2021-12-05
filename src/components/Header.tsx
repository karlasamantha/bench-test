import styles from '../styles/Header.module.css'

function Header({ title }: { title: string }) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  )
}

export default Header