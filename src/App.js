import React, { useState } from 'react';
import './styles/App.css';
import InventoryList from './components/InventoryList';
import AddProductForm from './components/AddProductForm';
import StatsPanel from './components/StatsPanel';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', quantity: 15, price: 1200, sku: 'LAP-001' },
    { id: 2, name: 'Mouse', category: 'Accessories', quantity: 45, price: 25, sku: 'MOU-001' },
    { id: 3, name: 'Keyboard', category: 'Accessories', quantity: 32, price: 75, sku: 'KEY-001' },
    { id: 4, name: 'Monitor', category: 'Electronics', quantity: 8, price: 350, sku: 'MON-001' },
    { id: 5, name: 'USB Cable', category: 'Cables', quantity: 120, price: 5, sku: 'USB-001' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortBy, setSortBy] = useState('name');
  const [showLowStock, setShowLowStock] = useState(false);

  const categories = ['All', ...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.sku.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = filterCategory === 'All' || product.category === filterCategory;
      const matchesStockFilter = !showLowStock || product.quantity < 20;
      return matchesSearch && matchesCategory && matchesStockFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'quantity') return b.quantity - a.quantity;
      if (sortBy === 'price') return b.price - a.price;
      return 0;
    });

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map(p => p.id), 0) + 1,
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const updateQuantity = (id, quantityChange) => {
    const product = products.find(p => p.id === id);
    if (product) {
      const newQuantity = Math.max(0, product.quantity + quantityChange);
      updateProduct(id, { quantity: newQuantity });
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="header-content">
          <div className="header-title">
            <span className="icon">📦</span>
            <h1>Inventory Management System</h1>
          </div>
          <p className="header-subtitle">Manage your products efficiently and effectively</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <StatsPanel products={products} />

          <div className="content-grid">
            <aside className="sidebar">
              <AddProductForm onAddProduct={addProduct} />
            </aside>

            <section className="main-content">
              <div className="controls-section">
                <div className="search-bar">
                  <input
                    type="text"
                    placeholder="Search by name or SKU..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                  />
                  <span className="search-icon">🔍</span>
                </div>

                <div className="filters-row">
                  <div className="filter-group">
                    <label htmlFor="category-filter">Category:</label>
                    <select
                      id="category-filter"
                      value={filterCategory}
                      onChange={(e) => setFilterCategory(e.target.value)}
                      className="filter-select"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div className="filter-group">
                    <label htmlFor="sort-by">Sort By:</label>
                    <select
                      id="sort-by"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="filter-select"
                    >
                      <option value="name">Name (A-Z)</option>
                      <option value="quantity">Stock Level (High-Low)</option>
                      <option value="price">Price (High-Low)</option>
                    </select>
                  </div>

                  <div className="filter-group checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        checked={showLowStock}
                        onChange={(e) => setShowLowStock(e.target.checked)}
                      />
                      Low Stock Only (&lt;20)
                    </label>
                  </div>
                </div>
              </div>

              <div className="results-info">
                <p>Showing <strong>{filteredProducts.length}</strong> of <strong>{products.length}</strong> products</p>
              </div>

              <InventoryList
                products={filteredProducts}
                onUpdateProduct={updateProduct}
                onDeleteProduct={deleteProduct}
                onUpdateQuantity={updateQuantity}
              />
            </section>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>&copy; 2024 Inventory Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
