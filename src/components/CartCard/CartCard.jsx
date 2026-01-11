import { useCart } from '../../context/CartContext'
import styles from './CartCard.module.css'
import Vector from '../../assets/icons/Vector.svg'

function CartItem({ item }) {
  const { deleteFromCart } = useCart()

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.name} />

      <div className={styles.info}>
        <p>{item.name}</p>
        <span>Цена:</span> <b>{item.price} €</b>
      </div>

      <button className={styles.delete} onClick={() => deleteFromCart(item.id)}>
        <img className={styles.vector} src={Vector} />
      </button>
    </div>
  )
}

export default CartItem
