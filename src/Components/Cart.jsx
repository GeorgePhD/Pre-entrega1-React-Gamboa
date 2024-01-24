import { useContext } from "react";
import { CartContext } from "../context/ShoppingCartContext";

const Cart = () => {

    const { cart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h1 className="cart-title">Cart</h1>

            {
                cart.map((item) => (
                    <div className="cart-item" key={item.id}>
                        <h2>{item.brand_name}</h2>
                        <p>{item.brew}</p>
                        <p>{item.price}</p>
                        <p>{item.country}</p>
                        <p>{item.strength}</p>
                        <img src={item.image_url} alt=""  />
                    </div>

                ))
            }
        </div>
    )
}

export default Cart