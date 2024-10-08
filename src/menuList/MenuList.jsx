import React from 'react';
import './menuList.css';
import TigerDragon from "../TiegerDrachen/tiegerDrachen"

const categories = [
  { id: 'z', title: 'Baumgartner Development', description: 'bruno@brainbloom.ch' },
  { id: 'a', title: 'Dies ist ein Lizenzprototype', description: 'Anpassung ab 3000 CHF' },

];



const MenuList = () => {
  return (
    <div className="menu-card">
      <div className="scrollable-content">
        {categories.map((category) => (
          <div key={category.id} className="category-slide">
            <h1>{category.title}</h1>
            <p>{category.description}</p>
          
          </div>
        ))}
     <TigerDragon />
      </div>
    </div>
  );
};

export default MenuList;