import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import Cart from './components/Cart/Cart'
import Contacts from './components/Contacts/Contacts'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
