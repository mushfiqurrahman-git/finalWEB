import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const handleQuantityChange = (event, productId) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(productId, newQuantity);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.pricing * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="container">
      <h2 className="mt-3">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-unstyled">
            {cartItems.map((item, index) => (
              <li key={index} className="mb-3 cart-item">
                <div className="cart-item-details">
                  <div>
                    <h5>{item.name}</h5>
                    <p>Description: {item.description}</p>
                    <p>Price: ${item.pricing}</p>
                    <p>Shipping Cost: ${item.shippingCost}</p>
                    <p>Quantity: 
                      <input 
                        type="number" 
                        value={item.quantity} 
                        onChange={(e) => handleQuantityChange(e, item.id)} 
                        min="1" 
                      />
                    </p>
                  </div>
                  <div className="cart-item-actions">
                    <button onClick={() => removeFromCart(item.id)} className="btn btn-danger">Remove</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="total-price">Total: ${calculateTotalPrice()}</div>
          <div className="cart-buttons">
            <Link to="/checkout" className="btn btn-primary">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
