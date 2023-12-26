import { useState, useEffect } from "react";
import { getItemById } from "../Components/helpers/getData";
import ItemDetail from "./ItemDetail";
import PropTypes from 'prop-types';
import {useParams}  from 'react-router-dom';

const ItemDetailContainer = () => {

    
    const [Item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {
        getItemById(Number(id))
            .then((res) => {
                setItem(res);
            })
    }, [id])

    return (
        <>
            <h2>ItemDetailContainer</h2>
            {Item && <ItemDetail item={Item} />}
        </>
    )
}
ItemDetailContainer.propTypes = {
    itemId: PropTypes.number.isRequired,  // Adjust the prop type based on your requirements
};

export default ItemDetailContainer