
const ItemCounter = ({counter, handleAddToCart, handleSubtractFromCart, handleAddingToCartBtn}) => {

    return (
        <div className='item-counter-container'>
        <div className="item-counter">
            <button onClick={handleSubtractFromCart}>-</button>
            <p>{counter}</p>
            <button onClick={handleAddToCart}>+</button>
        </div>
        <button className="add-to-cart" onClick={handleAddingToCartBtn}>Add to cart {counter}</button>
        </div>
    )
}

export default ItemCounter