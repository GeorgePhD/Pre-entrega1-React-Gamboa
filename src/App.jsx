import Navbar from './Components/Navbar.jsx';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About.jsx';
import Products from './Components/Products.jsx';
import Contact from './Components/Contact.jsx';
import Cart from './Components/Cart.jsx';
import Home from './Components/Home.jsx';
import ItemListContainer from './Components/ItemListContainer.jsx';
import ItemDetailContainer from './Components/ItemDetailContainer.jsx';
function App() {

  /* const greeting = 'Welcome to Cafer Coffee'; */

  return (
    <>
      <BrowserRouter basename="/">

        <Navbar />
       {/*  <ItemListContainer greeting={greeting}/> */}
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/products' element={ <Products />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/cart' element={ <Cart />} />
        </Routes>
        
        
      </BrowserRouter>
  
      {/* <ItemDetailContainer itemId={2}/> */}
    </>
  )
}

export default App
