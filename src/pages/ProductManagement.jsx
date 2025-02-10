import { useState } from 'react';

const ProductManagement = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productDescription, setProductDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add product to database
    console.log('Product added:', {
      name: productName,
      price: productPrice,
      category: productCategory,
      description: productDescription
    });
  };

  return (
    <div className="container">
      <h1>Manage Products</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Name</label>
          <input 
            type="text" 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input 
            type="number" 
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required 
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select 
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="cereals">Cereals</option>
            <option value="meat">Meat</option>
            <option value="dairy">Dairy Products</option>
          </select>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea 
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required 
          />
        </div>
        <button type="submit" className="btn-primary">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ProductManagement;
