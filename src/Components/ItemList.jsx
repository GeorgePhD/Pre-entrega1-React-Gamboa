import PropTypes from 'prop-types';
import Item from './Item';
import '../../src/App.css';
const ItemList = ({products}) => {

    return (
            <div>
            <h2>Products</h2>
            <div className="products-container">
                {products.map((product) => <Item product={product} key={product.id} />)}
            </div>
        </div>
    );
};

ItemList.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            brand_name: PropTypes.string.isRequired,
            brew: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            country: PropTypes.string.isRequired,
            strength: PropTypes.string.isRequired,
            image_url: PropTypes.string.isRequired,
            // Add more prop types as needed for other properties
        })
    ).isRequired,
};


export default ItemList