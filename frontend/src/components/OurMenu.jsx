import { useState } from 'react';

function OurMenu() {
  const [activeTab, setActiveTab] = useState('all');

  const menuItems = {
    all: [
      { id: 1, name: 'Margherita Pizza', description: 'Fresh mozzarella, basil, and tomato sauce', price: '$12.99', category: 'breakfast' },
      { id: 2, name: 'Fluffy Pancakes', description: 'Served with maple syrup and fresh berries', price: '$8.99', category: 'breakfast' },
      { id: 3, name: 'Caesar Salad', description: 'Crisp romaine lettuce with parmesan and croutons', price: '$9.99', category: 'lunch' },
      { id: 4, name: 'Grilled Chicken Sandwich', description: 'Tender grilled chicken with fresh vegetables', price: '$11.99', category: 'lunch' },
      { id: 5, name: 'Garlic Bread', description: 'Crispy bread with garlic butter and herbs', price: '$5.99', category: 'starters' },
      { id: 6, name: 'Shrimp Appetizer', description: 'Chilled shrimp with cocktail sauce', price: '$10.99', category: 'starters' },
      { id: 7, name: 'Ribeye Steak', description: 'Premium cut with seasonal vegetables', price: '$24.99', category: 'dinner' },
      { id: 8, name: 'Salmon Fillet', description: 'Fresh salmon with lemon butter sauce', price: '$19.99', category: 'dinner' },
      { id: 9, name: 'Chocolate Cake', description: 'Rich chocolate cake with creamy frosting', price: '$6.99', category: 'desserts' },
      { id: 10, name: 'Cheesecake', description: 'New York style cheesecake with berry topping', price: '$7.99', category: 'desserts' }
    ]
  };

  menuItems.breakfast = menuItems.all.filter(item => item.category === 'breakfast');
  menuItems.lunch = menuItems.all.filter(item => item.category === 'lunch');
  menuItems.starters = menuItems.all.filter(item => item.category === 'starters');
  menuItems.dinner = menuItems.all.filter(item => item.category === 'dinner');
  menuItems.desserts = menuItems.all.filter(item => item.category === 'desserts');

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'breakfast', label: 'Breakfast' },
    { id: 'lunch', label: 'Lunch' },
    { id: 'starters', label: 'Starters' },
    { id: 'dinner', label: 'Dinner' },
    { id: 'desserts', label: 'Desserts' }
  ];

  return (
    <section className="py-5">
      <div className="container">
        {/* Heading and Subheading */}
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3" style={{ color: '#333' }}>
            Our Menu
          </h2>
          <p className="lead text-muted" style={{ fontSize: '1.2rem' }}>
            Discover our delicious selection of dishes prepared with passion and finest ingredients
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="d-flex justify-content-center mb-5">
          <ul className="nav nav-pills gap-2 flex-wrap" role="tablist">
            {categories.map(category => (
              <li key={category.id} className="nav-item" role="presentation">
                <button
                  className={`nav-link ${activeTab === category.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(category.id)}
                  style={{
                    backgroundColor: activeTab === category.id ? '#ff6b35' : '#e9ecef',
                    color: activeTab === category.id ? 'white' : '#333',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Items Grid */}
        <div className="row g-4">
          {menuItems[activeTab].map(item => (
            <div key={item.id} className="col-lg-4 col-md-6 col-sm-12">
              <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div className="card-body d-flex flex-column">
                  {/* Item Name */}
                  <h5 className="card-title fw-bold mb-2" style={{ color: '#4b4741', fontSize: '1.2rem' }}>
                    {item.name}
                  </h5>

                  {/* Description */}
                  <p className="card-text text-muted flex-grow-1" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                    {item.description}
                  </p>

                  {/* Price */}
                  <div className="mt-3">
                    <span className="fw-bold" style={{ color: '#ff6b35', fontSize: '1.3rem' }}>
                      {item.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurMenu;
