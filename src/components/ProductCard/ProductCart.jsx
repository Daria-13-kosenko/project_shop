import React from 'react'
import { useCart } from '../../context/CartContext'
import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(product)
  }

  return (
    <div className={styles.card}>
      <div className={styles.nameSnek}>
        <img
          className={styles.sneakers}
          src={product.image}
          alt={product.name}
        ></img>
        <h3>{product.name}</h3>
      </div>
      <div>
        <div className={styles.prices}>
          <div>
            <p>ЦЕНА:</p>
            <p className={styles.price}> {product.price} руб.</p>
          </div>
          <button onClick={handleAddToCart} className={styles.button}>
            +
          </button>
        </div>
      </div>
    </div>
  )
}
export default ProductCard
