import React, { useState } from 'react';
import '../styles/ProductCard.css';

function ProductCard({ product, onUpdate, onDelete, onUpdateQuantity }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(product);

  const handleSave = () => {
    onUpdate(product.id, editData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData(product);
    setIsEditing(false);
  };

  const getStockStatus = (quantity) => {
    if (quantity === 0) return 'out-of-stock';
    if (quantity < 20) return 'low-stock';
    return 'in-stock';
  };

  const getStockLabel = (quantity) => {
    if (quantity === 0) return 'Out of Stock';
    if (quantity < 20) return 'Low Stock';
    return 'In Stock';
  };

  const stockStatus = getStockStatus(product.quantity);

  return (
    <div className={`product-card ${stockStatus}`}>
      {product.quantity === 0 && <div className="out-of-stock-badge">Out of Stock</div>}
      {product.quantity > 0 && product.quantity < 20 && <div className="low-stock-badge">Low Stock</div>}

      <div className="card-header">
        <h3 className="product-name">{product.name}</h3>
        <span className="category-badge">{product.category}</span>
      </div>

      {!isEditing ? (
        <>
          <div className="card-content">
            <div className="info-row">
              <span className="label">SKU:</span>
              <span className="value">{product.sku}</span>
            </div>
            <div className="info-row">
              <span className="label">Stock:</span>
              <span className={`value stock-value ${stockStatus}`}>
                {product.quantity} units
              </span>
            </div>
            <div className="info-row">
              <span className="label">Price:</span>
              <span className="value price">${product.price.toFixed(2)}</span>
            </div>
            <div className="info-row">
              <span className="label">Total Value:</span>
              <span className="value total">${(product.quantity * product.price).toFixed(2)}</span>
            </div>
          </div>

          <div className="card-actions">
            <div className="quantity-controls">
              <button
                className="btn-quantity"
                onClick={() => onUpdateQuantity(product.id, -1)}
                disabled={product.quantity === 0}
                title="Decrease quantity"
              >
                ➖
              </button>
              <span className="quantity-display">{product.quantity}</span>
              <button
                className="btn-quantity"
                onClick={() => onUpdateQuantity(product.id, 1)}
                title="Increase quantity"
              >
                ➕
              </button>
            </div>
            <button
              className="btn btn-edit"
              onClick={() => setIsEditing(true)}
              title="Edit product"
            >
              ✏️ Edit
            </button>
            <button
              className="btn btn-delete"
              onClick={() => onDelete(product.id)}
              title="Delete product"
            >
              🗑️ Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="edit-form">
            <div className="form-group">
              <label>Product Name:</label>
              <input
                type="text"
                value={editData.name}
                onChange={(e) => setEditData({ ...editData, name: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Category:</label>
              <input
                type="text"
                value={editData.category}
                onChange={(e) => setEditData({ ...editData, category: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>SKU:</label>
              <input
                type="text"
                value={editData.sku}
                onChange={(e) => setEditData({ ...editData, sku: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Price:</label>
              <input
                type="number"
                step="0.01"
                value={editData.price}
                onChange={(e) => setEditData({ ...editData, price: parseFloat(e.target.value) })}
              />
            </div>
            <div className="form-group">
              <label>Quantity:</label>
              <input
                type="number"
                value={editData.quantity}
                onChange={(e) => setEditData({ ...editData, quantity: parseInt(e.target.value) })}
              />
            </div>
          </div>

          <div className="edit-actions">
            <button className="btn btn-save" onClick={handleSave}>
              ✓ Save
            </button>
            <button className="btn btn-cancel" onClick={handleCancel}>
              ✕ Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;
