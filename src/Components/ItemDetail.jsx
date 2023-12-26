import PropTypes from 'prop-types';


const ItemDetail = ({ item }) => {
    return (
        <div className='products'>
            <img className='products-container-img' src={`/assets/${item.image_url}`} alt="" />
            <h2 className='products-container-h2'>Brand : {item.brand_name}</h2>
            <p className='products-container-p'>Brew : {item.brew}</p>
            <p className='products-container-p'>Strength : {item.strength}</p>
            <p className='products-container-p'>Country : {item.country}</p>
            <p className='products-container-p'>$ {item.price}</p>
        </div>
    )
}

ItemDetail.propTypes = {
        item: PropTypes.shape({
        brand_name: PropTypes.string.isRequired,
        brew: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        strength: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        // Add more PropTypes as needed for other properties
    }).isRequired,
};

export default ItemDetail