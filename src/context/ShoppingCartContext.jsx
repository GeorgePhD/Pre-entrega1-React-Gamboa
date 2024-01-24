import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {

    const {user, age} = useContext(CartContext);
    console.log(user, age)

    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{comision, cart, setCart}}>
            {children}
        </CartContext.Provider>
        
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider