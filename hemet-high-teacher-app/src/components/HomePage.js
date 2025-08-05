import React, { useState } from 'react';
import { subcategories } from '../data/subcategories';

const HomePage = () => {
  const categories = Object.keys(subcategories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [currentSubcategories, setCurrentSubcategories] = useState(subcategories[selectedCategory]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(currentSubcategories[0].name);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    const newSubcategories = subcategories[category];
    setCurrentSubcategories(newSubcategories);
    setSelectedSubcategory(newSubcategories[0].name);
  };

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const handleNextClick = () => {
    const subcategory = currentSubcategories.find(sub => sub.name === selectedSubcategory);
    if (subcategory && subcategory.url) {
      window.location.href = subcategory.url;
    }
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
      <select onChange={handleSubcategoryChange} value={selectedSubcategory}>
        {currentSubcategories.map((subcategory) => (
          <option key={subcategory.name} value={subcategory.name}>
            {subcategory.name}
          </option>
        ))}
      </select>
      <button onClick={handleNextClick}>NEXT</button>
    </div>
  );
};

export default HomePage;
