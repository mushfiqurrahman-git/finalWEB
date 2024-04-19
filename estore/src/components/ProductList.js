import React, { useState, useEffect } from 'react';
import LogoutButton from '../components/Login/LogoutButton';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="container" style={{ backgroundImage: 'url(https://images.pexels.com/photos/4503816/pexels-photo-4503816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', backgroundSize: 'cover', minHeight: '100vh' }}>
      <h2 className="mt-3">Products</h2>
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        <div>
          <ul className="list-unstyled row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {products.map(product => (
              <li key={product._id} className="col">
                <div className="card h-100">
                  <img src={product.image} className="card-img-top" alt={product.description} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Description: {product.description}</p>
                    <p className="card-text">Price: ${product.pricing}</p>
                    <p className="card-text">Shipping Cost: ${product.shippingCost}</p>
                    <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductList;
