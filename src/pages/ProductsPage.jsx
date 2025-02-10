import { Link, useEffect, useState } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock API call - will be replaced with real API later
    const mockProducts = [
      { id: 1, name: 'Organic Apple', price: '$2.99', category: 'fruits' },
      { id: 2, name: 'Whole Wheat Bread', price: '$5.99', category: 'cereals' },
    ];
    setProducts(mockProducts);
  }, []);

  return (
    <div className="container">
      <h1>Our Products</h1>
      <div className="category-filter">
        <button className="btn-secondary">All</button>
        <button className="btn-secondary">Fruits</button>
        <button className="btn-secondary">Vegetables</button>
        <button className="btn-secondary">Cereals</button>
      </div>
      
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            image={`/product${product.id}.jpg`}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
