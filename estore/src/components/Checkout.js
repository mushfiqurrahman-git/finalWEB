import React, { useState } from 'react';
// Import Axios
import axios from 'axios'; 

const Checkout = ({ cartItems }) => {
  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.pricing * item.quantity, 0).toFixed(2);

  // State for shipping address
  const [shippingAddress, setShippingAddress] = useState('');

  // Handler for shipping address change
  const handleShippingAddressChange = (event) => {
    setShippingAddress(event.target.value);
  };

  const handleProceedToPayment = async () => {
    const url = 'http://localhost:3000/api/orders'; 
  
    // Prepare the data for the order
    const orderData = {
      products: cartItems.map(item => item._id), 
      user: 'userId', 
      totalPrice: parseFloat(totalPrice),
      shippingAddress: shippingAddress,
    };
    console.log("before :"+orderData)
  
    try {
      console.log("after1 :"+orderData)
      const response = await axios.post(url, orderData);
      console.log("after2 :"+orderData)
      console.log('Order created successfully:', response.data);
    } catch (error) {
      console.error('Error creating order:', error.message);
    }
  };
  

  return (
    <div className="container checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-content">
        <div className="checkout-items">
          {cartItems.length === 0 ? (
            <p className="checkout-empty">Your cart is empty</p>
          ) : (
            <ul className="list-group checkout-list">
              {cartItems.map((item, index) => (
                <li key={index} className="list-group-item mb-3">
                  <div className="checkout-item">
                    <h5 className="checkout-item-title">{item.name}</h5>
                    <p className="checkout-item-desc">Description: {item.description}</p>
                    <p className="checkout-item-price">Price: ${item.pricing}</p>
                    <p className="checkout-item-shipping">Shipping Cost: ${item.shippingCost}</p>
                    <p className="checkout-item-quantity">Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="checkout-summary">
          <div className="checkout-total">
            <p>Total: ${totalPrice}</p>
            <div className="checkout-address">
              <label htmlFor="shippingAddress">Shipping Address:</label>
              <input
                type="text"
                id="shippingAddress"
                value={shippingAddress}
                onChange={handleShippingAddressChange}
                className="form-control"
              />
            </div>
          </div>
          {/* Call handleProceedToPayment function onClick */}
          <button onClick={handleProceedToPayment} className="btn btn-primary checkout-btn">Proceed to Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
