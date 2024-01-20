import React, { useEffect, useState } from 'react';
import { fetchRestaurantData, fetchMenuData } from '../../services/api';

const Menu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const restaurant = await fetchRestaurantData();
        const menu = await fetchMenuData();

        setRestaurantData(restaurant);
        setMenuData(menu);
      } catch (error) {
      }
    };

    fetchData();
  }, []); // Include dependencies if needed  

  if (!restaurantData || !menuData || restaurantData === undefined || menuData === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="menu">
      <header>
        <img src={restaurantData.webSettings.bannerImage} alt={restaurantData.name} />
        <h1>{restaurantData.name} Menu</h1>
      </header>

      <div className="restaurant-details">
        <p>{restaurantData.address1}, {restaurantData.city}, {restaurantData.country}</p>
        <p>Open Hours: Monday - Sunday, 10:00 AM - 10:00 PM</p>
      </div>

      <div className="menu-sections">
        {menuData.sections.map((section) => (
          <div key={section.id} className="menu-section">
            <h2>{section.name}</h2>

            {section.items.map((item) => (
              <div key={item.id} className="menu-item">
                {item.images && item.images[0] && (
                  <img src={item.images[0].image} alt={item.name} />
                )}
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: {item.price} {restaurantData.ccySymbol}</p>
                  <button>Add to Basket</button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
