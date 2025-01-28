import React from 'react';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <header className="menu-header">
        <h2>Our Menu</h2>
        <p>Explore a wide variety of vegan and vegetarian dishes made with fresh, sustainable ingredients.</p>
      </header>

      {/* Starters Section */}
      <div className="menu-section">
        <h3>Starters</h3>
        <div className="menu-grid">
          <div className="menu-item">
            <span>Garden Fresh Salad</span>
            <span>$6.99</span>
            <p>Crisp greens with a lemon vinaigrette.</p>
          </div>
          <div className="menu-item">
            <span>Roasted Veggie Platter</span>
            <span>$7.99</span>
            <p>Assorted roasted seasonal vegetables.</p>
          </div>
          <div className="menu-item">
            <span>Stuffed Mushrooms</span>
            <span>$8.99</span>
            <p>Stuffed with spinach and vegan cheese.</p>
          </div>
          <div className="menu-item">
            <span>Vegan Spring Rolls</span>
            <span>$5.99</span>
            <p>Served with a tangy peanut dip.</p>
          </div>
        </div>
      </div>

      {/* Main Dishes Section */}
      <div className="menu-section">
        <h3>Main Dishes</h3>
        <div className="menu-grid">
          <div className="menu-item">
            <span>Vegan Burger</span>
            <span>$10.99</span>
            <p>Grilled plant-based patty with vegan aioli.</p>
          </div>
          <div className="menu-item">
            <span>Vegetarian Pizza</span>
            <span>$12.99</span>
            <p>Fresh vegan mozzarella and basil on stone-baked dough.</p>
          </div>
          <div className="menu-item">
            <span>Organic Buddha Bowl</span>
            <span>$11.99</span>
            <p>Quinoa, chickpeas, and tahini dressing.</p>
          </div>
          <div className="menu-item">
            <span>Tofu Stir Fry</span>
            <span>$9.99</span>
            <p>Tofu with fresh vegetables in a savory sauce.</p>
          </div>
          <div className="menu-item">
            <span>Avocado Toast</span>
            <span>$8.99</span>
            <p>With cherry tomatoes and microgreens.</p>
          </div>
          <div className="menu-item">
            <span>Chickpea Curry</span>
            <span>$10.49</span>
            <p>Served with fragrant basmati rice.</p>
          </div>
        </div>
      </div>

      {/* Desserts Section */}
      <div className="menu-section">
        <h3>Desserts</h3>
        <div className="menu-grid">
          <div className="menu-item">
            <span>Vegan Chocolate Cake</span>
            <span>$6.99</span>
            <p>Rich chocolate with coconut frosting.</p>
          </div>
          <div className="menu-item">
            <span>Fruit Parfait</span>
            <span>$5.99</span>
            <p>Fresh fruit, vegan yogurt, and granola.</p>
          </div>
          <div className="menu-item">
            <span>Almond Butter Cookies</span>
            <span>$4.99</span>
            <p>Soft and chewy with almond flavor.</p>
          </div>
          <div className="menu-item">
            <span>Banana Bread</span>
            <span>$5.49</span>
            <p>Served warm with hints of cinnamon.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
