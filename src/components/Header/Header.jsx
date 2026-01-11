import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'
import Main from '../Main/Main'
import Contacts from '../Contacts/Contacts'
import Cart from '../../data/products'

function Header() {
  return (
    <header className={styles.header}>
      <h1>Сникер - магазин</h1>
      <nav className={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#FFFFFF',
          })}
        >
          Главная
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? '#FFFF' : '#FFFFFF80',
          })}
        >
          Корзина
        </NavLink>
        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? '#FFFF' : '#FFFFFF80',
          })}
        >
          Контакты
        </NavLink>
      </nav>
    </header>
  )
}
export default Header
