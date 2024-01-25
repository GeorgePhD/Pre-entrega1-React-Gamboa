import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {

    const { cart, totalPrice, handleReset, handleBuyItems, handleAddItem, handleRemoveItem } = useContext(CartContext);

    return (
        <div className="cart-container">
           {/*  <h1 className="cart-title">Cart</h1> */}

            {
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <p className="cart-item-p">name: {item.brand_name}</p>
                        <p className="cart-item-p">brew: {item.brew}</p>
                        <p className="cart-item-p">price: ${item.price}</p>
                        <p className="cart-item-p">country: {item.country}</p>
                        <p className="cart-item-p">strength: {item.strength}</p>
                        <p className="cart-item-p">total ${item.price * item.counter} 
                        units: {item.counter}</p>
                        <button className="cart-btn-add" onClick={() => handleAddItem(item)}>+</button>
                        <button className="cart-btn-remove" onClick={() => handleRemoveItem(item)}>-</button>
                    </div>

                ))
            }

            {
                cart.length > 0 ? 
                <>
                    <h2>Total: ${totalPrice()} 😉😎</h2>
                    <button className="cart-btn-reset" onClick={handleReset}>reset cart</button>
                    <button className="cart-btn-buy" onClick={handleBuyItems}>buy items</button>
                </> 
                : <h1>Cart is empty 😢</h1>
            }
        </div>
    )
}

export default Cart