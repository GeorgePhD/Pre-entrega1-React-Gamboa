import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import coffeeData from '../data/coffee-data.json';

const Navbar = () => {

    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [strength, setStrength] = useState([]);


    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    useEffect(() => {

        const uniqueStrengths = [...new Set(coffeeData.map(coffee => coffee.strength))];
        setStrength(uniqueStrengths);

    }, []);
    return (


        <nav className='menu'>
            
            <ul className='menu-ul'>
                <li><Link className='menu-brand' to='/products'>Coffee products</Link></li>
                <li><Link className='menu-items' to='/'>Home</Link></li>
                <li><Link className='menu-items' to='/About'>About</Link></li>
                <li><Link className='menu-items' to='/products'>Products</Link></li>
                <li className={`menu-items ${isDropdownOpen ? 'active' : ''}`} onClick={toggleDropdown}>Categories
                    
                    {isDropdownOpen && (
                        <ul className="dropdown-content">
                            <li><Link className='menu-items'to="/products/mild">Mild</Link></li>
                            <li><Link className='menu-items'to="/products/medium">Medium</Link></li>
                            <li><Link className='menu-items'to="/products/bold">Bold</Link></li>
                            <li><Link className='menu-items'to="/products/strong">Strong</Link></li>
                        </ul>
                    )}
                </li>
                <li><Link className='menu-items' to='/contact'>Contact</Link></li>
                <li><Link className='menu-items' to='/cart'><FontAwesomeIcon className='shopping-cart' icon={faShoppingCart}></FontAwesomeIcon><span className='cart-quantity'>15</span></Link></li>
            </ul>
        </nav>

    )
}

export default Navbar