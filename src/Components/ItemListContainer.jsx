import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/config';
const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const strength = useParams().strength;
    console.log(strength)

    useEffect(() => {

        const productsRef = collection(db, 'products');

        let queryProduct;
        //other way to do it, using the ternary operator
        //const queryProduct = strength ? query(productsRef, where('strength', '==', strength)) : productsRef;

        if (strength) {
            queryProduct = query(productsRef, where('strength', '==', strength));
        } else {
            queryProduct = productsRef; 
        }

        getDocs(queryProduct).then((res) => {

            setProducts(
                res.docs.map((doc) => {
                    return { ...doc.data(), id: doc.id }
                }))
        })

    }, [strength]);



    return (
        <div>
            <ItemList products={products} />
        </div>
    )
}


export default ItemListContainer