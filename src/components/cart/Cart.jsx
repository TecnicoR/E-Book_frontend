import React from 'react'
import './cart.css'
import CartProduct from './cartproduct/CartProduct';

function Cart() {
  document.title = "Cart";
  return (
    <div className='cart'>
      <div className="cart-products">
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
      <CartProduct/>
      </div>
    </div>
  )
}

export default Cart