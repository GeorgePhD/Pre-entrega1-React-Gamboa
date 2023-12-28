
import '../styles/texts.css';
import image from '/assets/cafer-1.png';
import '../styles/products.css';
/* import Products from './Products'; */
const Products = () => {
  return (
    <div>
      <h1>Cafer Coffee</h1>
      {/* <Products /> */}
      <p>This is Products page component</p>
      <img className='products-img' src={image} alt="Cafer Coffee" />
    </div>
  );
}; 

export default Products

