import CartItems from './CartItems';
const Cart = (props) => {
  return (
    <section className='cart-section'>
      <h3>Your Cart</h3>
      <CartItems />
    </section>
  );
};

export default Cart;
