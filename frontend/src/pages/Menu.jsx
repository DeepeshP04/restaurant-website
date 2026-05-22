// Menu.jsx
import { useState } from "react";
import "./Menu.css";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("all");

  const menuItems = {
    all: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Fresh mozzarella, basil, and tomato sauce",
        price: "$12.99",
        category: "breakfast",
        image:
          "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Fluffy Pancakes",
        description: "Served with maple syrup and fresh berries",
        price: "$8.99",
        category: "breakfast",
        image:
          "https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 3,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce with parmesan and croutons",
        price: "$9.99",
        category: "lunch",
        image:
          "https://images.unsplash.com/photo-1546793665-c74683f339c1?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 4,
        name: "Grilled Chicken Sandwich",
        description: "Tender grilled chicken with fresh vegetables",
        price: "$11.99",
        category: "lunch",
        image:
          "https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 5,
        name: "Garlic Bread",
        description: "Crispy bread with garlic butter and herbs",
        price: "$5.99",
        category: "starters",
        image:
          "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 6,
        name: "Shrimp Appetizer",
        description: "Chilled shrimp with cocktail sauce",
        price: "$10.99",
        category: "starters",
        image:
          "https://images.unsplash.com/photo-1563379091339-03246963d96c?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 7,
        name: "Ribeye Steak",
        description: "Premium cut with seasonal vegetables",
        price: "$24.99",
        category: "dinner",
        image:
          "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500&auto=format&fit=crop",
      },
      {
        id: 8,
        name: "Salmon Fillet",
        description: "Fresh salmon with lemon butter sauce",
        price: "$19.99",
        category: "dinner",
        image:
          "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=500&auto=format&fit=crop",
      },
    ],
  };

  const categories = [
    { id: "all", label: "All" },
    { id: "breakfast", label: "Breakfast" },
    { id: "lunch", label: "Lunch" },
    { id: "starters", label: "Starters" },
    { id: "dinner", label: "Dinner" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems.all
      : menuItems.all.filter(
          (item) => item.category === activeCategory
        );

  return (
    <>
      {/* HERO SECTION */}
      <section className="menu-hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Our Menu</h1>
          <p>
            Taste the finest dishes crafted with fresh ingredients and passion
          </p>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="menu-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="text-center mb-5">
            <h5 className="menu-subtitle">POPULAR DISHES</h5>
            <h2 className="menu-title">Explore Our Menu</h2>
          </div>

          {/* Tabs */}
          <div className="d-flex justify-content-center flex-wrap gap-3 mb-5">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`menu-tab ${
                  activeCategory === category.id ? "active-tab" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="row g-4">
            {filteredItems.map((item) => (
              <div className="col-lg-6" key={item.id}>
                <div className="menu-card">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="menu-image"
                  />

                  <div className="menu-content">
                    <div className="d-flex justify-content-between align-items-start">
                      <h5>{item.name}</h5>
                      <span className="menu-price">{item.price}</span>
                    </div>

                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}