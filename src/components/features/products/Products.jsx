import { products } from '../../../shared/PRODUCTS.js';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';

const Products = (props) => {
  const dispatch = useDispatch();
  return (
    <section className='products-section'>
      <h3>Our Products</h3>
      <main className='products'>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <div>
                <img src={product.img} alt={product.name} />
              </div>
              <div>
                <strong>{product.name}</strong> - ${product.price}
              </div>
              <div>
                <button onClick={() => dispatch(addToCart(product))}>
                  Add to Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
};

export default Products;
