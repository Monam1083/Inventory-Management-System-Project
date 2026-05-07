import React from 'react';
import ProductCard from './ProductCard';
import '../styles/InventoryList.css';

function InventoryList({ products, onUpdateProduct, onDeleteProduct, onUpdateQuantity }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-icon">📭</span>
        <h3>No Products Found</h3>
        <p>Try adjusting your filters or add a new product to get started.</p>
      </div>
    );
  }

  return (
    <div className="inventory-grid">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onUpdate={onUpdateProduct}
          onDelete={onDeleteProduct}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
    </div>
  );
}

export default InventoryList;
