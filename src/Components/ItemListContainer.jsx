import { useEffect, useState } from 'react';
import { getData } from '../Components/helpers/getData';
import ItemList from './ItemList';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const strength = useParams().strength;
    console.log(strength)

    useEffect(() => {
        getData()
            .then((res) => {
                if(strength) {
                    setProducts(res.filter((product) => product.strength === strength));
                } else {
                    setProducts(res);
                }
            })
    },[strength]);



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