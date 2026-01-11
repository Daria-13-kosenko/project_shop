import Snapchat from '../../assets/icons/Snapchat.svg'
import Facebook from '../../assets/icons/_facebook.svg'
import X_icon from '../../assets/icons/x_icon.jpeg.svg'
import styles from './Contacts.module.css'

function Contacts() {
  return (
    <div className={styles.contacts}>
      <h1>Контакты</h1>

      <ul className={styles.numbers}>
        <li>8 800 000 00 00</li>
        <br />
        <li>emailexample@email.com</li>
      </ul>
      <div className={styles.information}>
        {' '}
        <div>
          <form className={styles.inputs}>
            <input
              placeholder="Ваш email"
              type="email"
              className={styles.input}
            ></input>
            <input
              type="text"
              placeholder="Ваше имя"
              className={styles.input}
            ></input>
          </form>
          <textarea
            type="text"
            placeholder="Введите сообщение"
            className={styles.textarea}
          />
        </div>
        <div className={styles.findUs}>
          <p>Найдите нас:</p>
          <div>
            <img src={Snapchat} />
            <img src={Facebook} />
            <img src={X_icon} />
          </div>
        </div>
      </div>
      <button className={styles.button}>Отправить</button>
    </div>
  )
}

export default Contacts
