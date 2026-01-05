import React, { useEffect, useState } from 'react'
import axios from 'axios'
import News from '../News/News'
import ProductCard from '../ProductCard/ProductCart'
import styles from './Main.module.css'

function Main() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('U R L')
        setProduct(responce.data)
      } catch (error) {
        console.error('Ошибка при получении данных', error)
      }
    }
    fetchProducts()
  }, [])

  return (
    <main className={styles.main}>
      <News />
      <h1>Товары</h1>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
export default Main
