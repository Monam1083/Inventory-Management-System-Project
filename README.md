

https://github.com/user-attachments/assets/591f4e8c-07cd-4fc1-a356-8f8d5d5b20f3

# 📦 Inventory Management System

A fully responsive React-based inventory management application designed to help businesses efficiently manage their product inventory.

## ✨ Features

### Dashboard Overview
- **Statistics Panel**: Real-time inventory metrics including:
  - Total products count
  - Total items in stock
  - Total inventory value ($)
  - Low stock items count
  - Out of stock items count

### Product Management
- **Add New Products**: Quick form to add products with:
  - Product name
  - Category
  - SKU (Stock Keeping Unit)
  - Quantity
  - Price per unit
  - Form validation with error messages

- **View Products**: Display products in an organized grid layout with:
  - Product name and category
  - SKU code
  - Current stock level
  - Unit price
  - Total value calculation
  - Stock status indicators (In Stock / Low Stock / Out of Stock)

### Inventory Control
- **Quantity Management**:
  - Quick increment/decrement buttons (+/-)
  - Real-time quantity updates
  - Automatic stock status updating

- **Edit Products**: 
  - Click to edit any product information
  - Modify name, category, SKU, price, or quantity
  - Save or cancel changes

- **Delete Products**: 
  - Remove products from inventory
  - One-click deletion

### Search & Filter
- **Search Functionality**:
  - Search by product name
  - Search by SKU code
  - Real-time search results

- **Filters**:
  - Filter by category
  - Filter to show only low stock items (<20 units)
  - Combine multiple filters

- **Sort Options**:
  - Sort by name (A-Z)
  - Sort by stock level (High-Low)
  - Sort by price (High-Low)

## 📱 Responsive Design

The application is fully responsive across all devices:
- ✅ **Desktop**: Full-featured experience with sidebar layout
- ✅ **Tablet**: Optimized grid layout with flexible columns
- ✅ **Mobile**: Single column layout with touch-friendly controls

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14.0 or higher)
- npm (comes with Node.js)

### Installation

1. **Navigate to the project directory**:
```bash
cd react
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

The application will open automatically in your browser at `http://localhost:3000`

### Build for Production

To create an optimized production build:
```bash
npm run build
```

This creates a `build` folder with optimized files ready for deployment.

## 📁 Project Structure

```
react/
├── public/
│   └── index.html           # HTML entry point
├── src/
│   ├── components/
│   │   ├── InventoryList.js    # Main inventory list component
│   │   ├── ProductCard.js       # Individual product card
│   │   ├── AddProductForm.js    # Form to add new products
│   │   └── StatsPanel.js        # Statistics dashboard
│   ├── styles/
│   │   ├── App.css              # Main app styles
│   │   ├── InventoryList.css    # List styles
│   │   ├── ProductCard.css      # Card styles
│   │   ├── AddProductForm.css   # Form styles
│   │   └── StatsPanel.css       # Stats styles
│   ├── App.js                # Main app component
│   └── index.js              # React entry point
├── package.json              # Dependencies and scripts
└── README.md                 # This file
```

## 🎨 Design Highlights

### Color Scheme
- **Primary**: Blue (#2563eb) - Main actions
- **Success**: Green (#10b981) - Positive actions, in-stock items
- **Warning**: Amber (#f59e0b) - Low stock alerts
- **Danger**: Red (#ef4444) - Out of stock, delete actions
- **Neutral**: Slate shades - Text and backgrounds

### UI Components
- Clean, modern card-based layout
- Smooth hover effects and transitions
- Intuitive status badges
- Easy-to-read typography
- Consistent spacing and alignment

## 💡 How to Use

### Adding a Product
1. Scroll to the left sidebar (or top section on mobile)
2. Fill in the product details in the "Add New Product" form
3. Click "Add Product" button
4. Success message will appear confirming the addition

### Finding Products
1. Use the search bar to find by name or SKU
2. Select a category from the filter dropdown
3. Enable "Low Stock Only" to see products needing reorder

### Managing Inventory
1. Click the **+** button to increase stock
2. Click the **-** button to decrease stock
3. Click **✏️ Edit** to modify product details
4. Click **🗑️ Delete** to remove a product

### Viewing Statistics
- Check the stats panel at the top for real-time inventory metrics
- Stats update automatically as you make changes

## 🔧 Technology Stack

- **React 18.2**: UI library
- **React DOM 18.2**: React rendering
- **React Scripts 5.0**: Build tools and development server
- **CSS3**: Responsive styling
- **JavaScript (ES6+)**: Modern JavaScript features

## 📋 Data Structure

Each product contains:
```javascript
{
  id: number,           // Unique identifier
  name: string,         // Product name
  category: string,     // Product category
  sku: string,          // Stock Keeping Unit
  quantity: number,     // Current stock quantity
  price: number         // Price per unit
}
```

## 🐛 Known Limitations

- Data is stored in component state (not persisted to database)
- Refreshing the page will reset to initial data
- For production, integrate with a backend database

## 🔮 Future Enhancements

- Local storage persistence
- Backend API integration
- User authentication
- Advanced reporting and analytics
- Barcode scanning
- Multiple warehouse support
- Export/Import CSV functionality
- Email notifications for low stock

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Developer Notes

- The app uses React Hooks (useState) for state management
- All components are functional components
- Styling uses CSS3 with CSS Grid and Flexbox for layouts
- Mobile-first responsive design approach
- No external UI frameworks (pure CSS)
**Built with ❤️ using React**


https://github.com/user-attachments/assets/ab258b50-cfcb-40d4-b211-cc907c47b5be

