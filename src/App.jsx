import Navbar from './Components/Navbar.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';
import { useState } from 'react';
import { CartContext } from './context/ShoppingCartContext.jsx';
import CartWidget from './Components/CartWidget.jsx';


/* import {app} from './firebase/config.jsx';
import {db} from './firebase/config.jsx'; */

function App() {

  const [cart, setCart] = useState([]);

  const handleAddingToCartBtn = (item, counter) => {

    const addedItem = {...item, counter};
    const newCart = [...cart];
    const isInCart = newCart.find((item) => item.id === addedItem.id);

    if (isInCart) {
        isInCart.counter += counter;
        setCart(newCart);
        
    } else {
        newCart.push(addedItem);
        setCart(newCart);
        
    }
    setCart(newCart);
  }

  const cartQuantity = () => {

    return cart.reduce((acc, curr) => acc + curr.counter, 0);
  }

  const totalPrice = () => {
    return cart.reduce((acc, curr) => acc + curr.price * curr.counter, 0)
  }

  const handleReset = () => {
    setCart([]);
  }

  return (
    <>
    <CartContext.Provider value ={{cart, handleAddingToCartBtn, cartQuantity, totalPrice, handleReset}}>
      <BrowserRouter>

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/products' element={<ItemListContainer />} />
          <Route path='/products/:strength' element={<ItemListContainer />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cartwidget' element={<CartWidget />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
      </BrowserRouter>

      {/* <footer className='footer title'>the footer information will be placed here</footer> */}
  
      </CartContext.Provider>
    </>
  )
}

export default App
