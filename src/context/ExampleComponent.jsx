import { useContext } from "react";
import { CartContext } from "./context/ShoppingCartContext";
const ExampleComponent = () => {

    const { comision, cart, setCart } = useContext(CartContext)


    return (
        <div>
            <h1>{cart}</h1>
            <p>Comision: {comision}</p>
            <button onClick={() => setCart("new value")}>Click me</button>
        </div>
    )
}

export default ExampleComponent