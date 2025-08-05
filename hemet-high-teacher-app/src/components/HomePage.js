import React, { useState } from 'react';
import { subcategories } from '../data/subcategories';

const HomePage = () => {
  const categories = Object.keys(subcategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentSubcategories, setCurrentSubcategories] = useState(subcategories[selectedCategory]);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setCurrentSubcategories(subcategories[category]);
  };

  return (
    <div>
      <h1>Hemet High Teacher App</h1>
      <p>You need to be signed into your HUSD Google account to use this app.</p>
      <select onChange={handleCategoryChange} value={selectedCategory}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select>
        {currentSubcategories.map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </select>
      <button>NEXT</button>
    </div>
  );
};

export default HomePage;
