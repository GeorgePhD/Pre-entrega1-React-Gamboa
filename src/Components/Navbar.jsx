import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {

    return (

        
        <nav className='menu'>
        {/* icon goes here  TODO: add icons */}
            <ul className='menu-ul'>
                <li><Link className='menu-brand' to='/'>Cafer products</Link></li>
                <li><Link className='menu-items' to='/'>Home</Link></li>
                <li><Link className='menu-items' to='/About'>About</Link></li>
                <li><Link className='menu-items' to='/Products'>Products</Link></li>
                <li><Link className='menu-items' to='/Contact'>Contact</Link></li>
                <li><Link className='menu-items' to='/Cart'><FontAwesomeIcon className='shopping-cart' icon={faShoppingCart} /><span>15</span><FontAwesomeIcon /></Link></li>
                
            </ul>
            
        </nav>
        
    )
}

export default Navbar