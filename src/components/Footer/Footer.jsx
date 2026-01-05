import React from 'react'
import styles from './Footer.module.css'
import facebookLogo from '../../assets/icons/facebookLogo.svg'
import twitter from '../../assets/icons/twitter.svg'
import instagram from '../../assets/icons/instagram.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Контакты</p>
        <div>
          8 800 000 00 00
          <br />
          emailexample@email.com
        </div>
        <div> 2024 Сникер магазин. Все права защищены</div>
      </div>
      <div className={styles.footerRight}>
        <div>
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
        <input placeholder="Введите свой email:"></input>
      </div>
    </footer>
  )
}
export default Footer
