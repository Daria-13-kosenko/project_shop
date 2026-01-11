import { useState } from 'react'
import News from '../News/News'
import ProductCard from '../ProductCard/ProductCart'
import styles from './Main.module.css'
import products from '../../data/products.js'

function Main() {
  const [items] = useState(products)

  return (
    <main className={styles.main}>
      <News />
      <h1>Товары</h1>

      <div className={styles.carts}>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Main
