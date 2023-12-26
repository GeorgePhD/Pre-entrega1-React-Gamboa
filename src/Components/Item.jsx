import PropTypes from 'prop-types';
import '../../src/App.css';
import { Link } from 'react-router-dom';
const Item = ({product}) => {
    return (
        <div>
            <div className='products'>
                <img className='products-container-img' src={`/assets/${product.image_url}`} alt="" />
                console.log(`/assets/${product.image_url}`);

                <p className='products-container-p'>Brand : {product.brand_name}</p>
                <p className='products-container-p'>Brew : {product.brew}</p>
                <p className='products-container-p'>Price : {product.price}</p>
                <p className='products-container-p'>Country : {product.country}</p>
                <p className='products-container-p'>Strength : {product.strength}</p>
                <div className='link-container'>
                <Link className='products-container-a' to={`/item/${product.id}`}>more info</Link>
                </div>
            </div>
        </div>
    )
}
Item.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        brand_name: PropTypes.string.isRequired,
        brew: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        strength: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        // Add more prop types as needed for other properties
    }).isRequired,
};


export default Item