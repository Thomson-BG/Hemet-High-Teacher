import React, { useState, useMemo, useEffect } from 'react';
import { subcategories } from '../data/subcategories';
import Cube from './Cube';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(Object.keys(subcategories)[0]);
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return subcategories;
    }

    const lowercasedFilter = searchTerm.toLowerCase();
    const filtered = {};

    for (const category in subcategories) {
      const subcatList = subcategories[category].filter(
        (sub) =>
          sub.name.toLowerCase().includes(lowercasedFilter) ||
          category.toLowerCase().includes(lowercasedFilter)
      );

      if (subcatList.length > 0) {
        filtered[category] = subcatList;
      }
    }
    return filtered;
  }, [searchTerm]);

  const categories = Object.keys(filteredData);

  // Update selectedCategory if it's no longer in the filtered list
  if (!categories.includes(selectedCategory) && categories.length > 0) {
      setSelectedCategory(categories[0]);
  } else if (categories.length === 0 && selectedCategory) {
      setSelectedCategory('');
  }

  const currentSubcategories = filteredData[selectedCategory] || [];
  const [selectedSubcategory, setSelectedSubcategory] = useState(currentSubcategories.length > 0 ? currentSubcategories[0].name : '');


  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSelectedSubcategory(filteredData[event.target.value][0].name);
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInstallClick = () => {
    if (installPrompt) {
      installPrompt.prompt();
    }
  };

  return (
    <div>
      <h1>Hemet High Teacher App</h1>
      <p>You need to be signed into your HUSD Google account to use this app.</p>
      {installPrompt && <button onClick={handleInstallClick}>Install App</button>}
      <input type="text" placeholder="Search..." onChange={handleSearchChange} />
      <p className="search-description">Search above, using keywords. Or use the category/subcategory drop down menus below.</p>
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
      <Cube />
      <p className="attribution">Thomson innovations</p>
    </div>
  );
};

export default HomePage;
