import React from 'react';
import '../styles/StatsPanel.css';

function StatsPanel({ products }) {
  const totalProducts = products.length;
  const totalItems = products.reduce((sum, p) => sum + p.quantity, 0);
  const totalValue = products.reduce((sum, p) => sum + (p.quantity * p.price), 0);
  const lowStockCount = products.filter(p => p.quantity > 0 && p.quantity < 20).length;
  const outOfStockCount = products.filter(p => p.quantity === 0).length;

  return (
    <div className="stats-panel">
      <div className="stat-card primary">
        <div className="stat-icon">📊</div>
        <div className="stat-content">
          <span className="stat-label">Total Products</span>
          <span className="stat-value">{totalProducts}</span>
        </div>
      </div>

      <div className="stat-card secondary">
        <div className="stat-icon">📦</div>
        <div className="stat-content">
          <span className="stat-label">Total Items</span>
          <span className="stat-value">{totalItems}</span>
        </div>
      </div>

      <div className="stat-card tertiary">
        <div className="stat-icon">💰</div>
        <div className="stat-content">
          <span className="stat-label">Total Value</span>
          <span className="stat-value">${totalValue.toFixed(2)}</span>
        </div>
      </div>

      <div className="stat-card warning">
        <div className="stat-icon">⚠️</div>
        <div className="stat-content">
          <span className="stat-label">Low Stock Items</span>
          <span className="stat-value">{lowStockCount}</span>
        </div>
      </div>

      <div className="stat-card danger">
        <div className="stat-icon">🚫</div>
        <div className="stat-content">
          <span className="stat-label">Out of Stock</span>
          <span className="stat-value">{outOfStockCount}</span>
        </div>
      </div>
    </div>
  );
}

export default StatsPanel;
