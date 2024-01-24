
import { Link } from 'react-router-dom';
import '../styles/texts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';


const Cart = () => {

    const { cartQuantity } = useContext(CartContext);

    return (
        <>
        <li><Link className='menu-items' to='/cart'><FontAwesomeIcon className='shopping-cart' icon={faShoppingCart}></FontAwesomeIcon><span className='cart-quantity'>{cartQuantity()}</span></Link></li>
        </>
    )
}

export default Cart