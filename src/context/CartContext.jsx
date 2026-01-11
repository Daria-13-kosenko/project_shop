import { createContext, useState, useContext, useMemo } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product])
  }

  const deleteFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + Number(item.price), 0)
  }, [cartItems])
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
