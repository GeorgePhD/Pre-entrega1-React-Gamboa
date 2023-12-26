import { useEffect, useState } from 'react';
import { getData } from '../Components/helpers/getData';
import ItemList from './ItemList';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([]);
    console.log(products)
    useEffect(() => {
        getData()
            .then((res) => {
                setProducts(res)
            })
    }, [])



    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string, // Add PropTypes for greeting if it's used
};

export default ItemListContainer