import React from 'react'
import styles from './Header.module.scss' //? SASS

export function Header() {
  return (
    <div className={styles.wrapper}>
        <header className={styles.container}>
            <a href="#">link1</a>
            <a href="#">link2</a> 
        </header>
    </div>
  )
}
