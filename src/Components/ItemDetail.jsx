import PropTypes from 'prop-types';
import ItemCounter from './ItemCounter';
import { useState, useContext } from 'react';
import { CartContext } from '../context/ShoppingCartContext';

const ItemDetail = ({ item }) => {

    const {cart, handleAddingToCartBtn} = useContext(CartContext);
    console.log(cart)
    const [counter, setCounter] = useState(1);
    const handleAddToCart = () => {
        
        counter && setCounter(counter + 1)
    }
    const handleSubtractFromCart = () => {

        counter > 1 && setCounter(counter - 1)
    }



    return (
        <div className='products'>
            <img className='products-container-img' src={`/assets/${item.image_url}`} alt="" />
            <h2 className='products-container-h2'>Brand : {item.brand_name}</h2>
            <p className='products-container-p'>Brew : {item.brew}</p>
            <p className='products-container-p'>Strength : {item.strength}</p>
            <p className='products-container-p'>Country : {item.country}</p>
            <p className='products-container-p'>$ {item.price}</p>
            {/* <button>Add to cart</button> */}
            <ItemCounter    counter={counter}
                            handleAddToCart={handleAddToCart}
                            handleSubtractFromCart={handleSubtractFromCart}
                            handleAddingToCartBtn={() => handleAddingToCartBtn(item, counter)} 
                            tem={item}/>
        </div>
    )
}

ItemDetail.propTypes = {
        item: PropTypes.shape({
        brand_name: PropTypes.string.isRequired,
        brew: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        strength: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        // Add more PropTypes as needed for other properties
    }).isRequired,
};

export default ItemDetail