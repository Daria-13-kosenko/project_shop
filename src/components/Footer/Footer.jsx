import React from 'react'
import styles from './Footer.module.css'
import facebookLogo from '../../assets/icons/facebookLogo.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <p>Контакты</p>
        <div className={styles.number}>
          8 800 000 00 00
          <br />
          <br />
          emailexample@email.com
        </div>
        <div className={styles.rights}>
          {' '}
          2024 Сникер магазин. Все права защищены
        </div>
      </div>
      <div className={styles.footerRight}>
        <div className={styles.socialMedia}>
          <a href="link.domain">
            <img src={facebookLogo} alt="facebook"></img>
          </a>
          <a href="link.domain">
            <img src={twitter} alt="twitter"></img>
          </a>
          <a href="link.domain">
            <img src={instagram} alt="instagram"></img>
          </a>
        </div>
        <input
          className={styles.input}
          placeholder="Введите свой email:"
        ></input>
      </div>
    </footer>
  )
}
export default Footer
