import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
/* import PropTypes from 'prop-types'; */
import {useParams}  from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemDetailContainer = () => {

    
    const [Item, setItem] = useState(null);
    const id = useParams().id;
    console.log("id:",id)

    useEffect(() => {
        
        const docRef = doc(db, 'products', id);
        getDoc(docRef).then((res) => {
            console.log(res)
            setItem(
                {...res.data(), id: res.id}
            )
        })
    }, [id])

    return (
        <>
            <h2>ItemDetailContainer</h2>
            {Item && <ItemDetail item={Item} />}
        </>
    )
}
/* ItemDetailContainer.propTypes = {
    itemId: PropTypes.number.isRequired,  // Adjust the prop type based on your requirements
}; */

export default ItemDetailContainer