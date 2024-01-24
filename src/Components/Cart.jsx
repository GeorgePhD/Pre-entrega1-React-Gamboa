import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {

    const { cart, totalPrice, handleReset } = useContext(CartContext);

    return (
        <div className="cart-container">
           {/*  <h1 className="cart-title">Cart</h1> */}

            {
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <p className="cart-item-p">name: {item.brand_name}</p>
                        <p className="cart-item-p">brew: {item.brew}</p>
                        <p className="cart-item-p">price: {item.price}</p>
                        <p className="cart-item-p">country: {item.country}</p>
                        <p className="cart-item-p">strength: {item.strength}</p>
                        <p className="cart-item-p">total ${item.price * item.counter} units: {item.counter}</p>
                    </div>

                ))
            }
            <h2>Total: ${totalPrice()} 😉😎</h2>
            <button className="cart-btn-reset" onClick={handleReset}>reset</button>
        </div>
    )
}

export default Cart