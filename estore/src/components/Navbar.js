import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ cartItems, addToCart, removeFromCart  }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [cartItemsCount, setCartItemsCount] = useState(0); 
  const navigate = useNavigate();

  useEffect(() => {
    //  if the user is logged in component 
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      setIsLoggedIn(true);
      const storedUsername = sessionStorage.getItem('username');
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }
  }, []);

  useEffect(() => {
    // total number of items in cart
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemsCount(totalItems);
  }, [cartItems]);

  const handleLogout = () => {
    // Clear user data from session storage
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    // Update state to reflect logout
    setIsLoggedIn(false);
    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/flower-logo-design%2Cfloral-logo-or-icon-template-9878bdbe8fd2b17ca6d65a7aa3b31226_screen.jpg?ts=1663831488" alt="Floral Boutique Logo" width="40" height="40" className="d-inline-block align-top" />
          Floral Boutique
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
          <Link className="btn btn-outline-primary me-2" to="/cart">
            Cart ({cartItemsCount})
          </Link>
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <span className="me-2">Welcome, {username}</span>
              <button className="btn btn-outline-danger" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link className="btn btn-outline-success" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
