import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const comision = "react in coderhouse";


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