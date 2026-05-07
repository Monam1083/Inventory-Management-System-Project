import React, { useState } from 'react';
import '../styles/AddProductForm.css';

function AddProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    quantity: '',
    price: '',
    sku: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Product name is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (formData.quantity === '' || formData.quantity < 0) newErrors.quantity = 'Valid quantity is required';
    if (formData.price === '' || formData.price < 0) newErrors.price = 'Valid price is required';
    if (!formData.sku.trim()) newErrors.sku = 'SKU is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      onAddProduct({
        name: formData.name,
        category: formData.category,
        quantity: parseInt(formData.quantity),
        price: parseFloat(formData.price),
        sku: formData.sku,
      });

      setFormData({
        name: '',
        category: '',
        quantity: '',
        price: '',
        sku: '',
      });
      setErrors({});
      setSubmitted(true);

      setTimeout(() => setSubmitted(false), 2000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div className="add-product-form-container">
      <h2 className="form-title">➕ Add New Product</h2>

      {submitted && (
        <div className="success-message">
          ✓ Product added successfully!
        </div>
      )}

      <form onSubmit={handleSubmit} className="add-product-form">
        <div className="form-group">
          <label htmlFor="name">Product Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g., Wireless Mouse"
            className={errors.name ? 'input-error' : ''}
          />
          {errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="e.g., Electronics"
            className={errors.category ? 'input-error' : ''}
          />
          {errors.category && <span className="error-text">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="sku">SKU *</label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
            placeholder="e.g., MOU-002"
            className={errors.sku ? 'input-error' : ''}
          />
          {errors.sku && <span className="error-text">{errors.sku}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity *</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="0"
            min="0"
            className={errors.quantity ? 'input-error' : ''}
          />
          {errors.quantity && <span className="error-text">{errors.quantity}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="price">Price ($) *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="0.00"
            step="0.01"
            min="0"
            className={errors.price ? 'input-error' : ''}
          />
          {errors.price && <span className="error-text">{errors.price}</span>}
        </div>

        <button type="submit" className="btn-submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
