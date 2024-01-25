import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const CartContext = createContext();
const initCart = JSON.parse(localStorage.getItem("cart")) || [];

const ShoppingCartProvider = ({ children }) => {

    const [cart, setCart] = useState(initCart);
    const MySwal = withReactContent(Swal);
    const handleAddingToCartBtn = (item, counter) => {

        const addedItem = { ...item, counter };
        const newCart = [...cart];
        const isInCart = newCart.find((item) => item.id === addedItem.id);

        if (isInCart) {
            isInCart.counter += counter;
            setCart(newCart);

        } else {
            newCart.push(addedItem);
            setCart(newCart);

        }
        setCart(newCart);

    }

    const cartQuantity = () => {

        return cart.reduce((acc, curr) => acc + curr.counter, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, curr) => acc + curr.price * curr.counter, 0)
    }

    const handleBuyItems = () => {

        MySwal.fire({
            title: '¿Estás seguro que deseas hacer esta compra?',
            icon: 'question', text: 'no se podrá dar marcha atrás',
            showCancelButton: true, confirmButtonText: 'comprar', cancelButtonText: 'cancelar'

        }).then((result) => {
            if (result.isConfirmed) {
                // User clicked "Vaciar"
                setCart([]);
                Swal.fire({
                    icon: 'success', 
                    title: 'gracias por tu compra 😊',
                });
            } else {
                // User clicked "Cancelar"
                Swal.fire('Operación cancelada', 'Tu carrito está seguro', 'info');
            }
            //setCart([]);
        })
    }

    const handleReset = () => {

        MySwal.fire({
            title: '¿Estás seguro que deseas vaciar el carrito?',
            icon: 'question', text: 'no se podrá dar marcha atrás',
            showCancelButton: true, confirmButtonText: 'vaciar', cancelButtonText: 'cancelar'

        }).then((result) => {
            if (result.isConfirmed) {
                setCart([]);
                // User clicked "Comprar"
                // Handle logic for completing the purchase
                Swal.fire('Sentimos que canceles tu compra 😢', 'esperamos verte pronto', 'info');
            } else {
                // User clicked "Cancelar"
                Swal.fire('Operación cancelada', 'Tu carrito está seguro', 'info');
            }
        })
    };
    //setCart([]);



    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, handleAddingToCartBtn, cartQuantity, totalPrice, handleReset, handleBuyItems }}>
            {children}
        </CartContext.Provider>

    )
}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ShoppingCartProvider