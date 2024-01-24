import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext(null);

const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    return (
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>
        
    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider