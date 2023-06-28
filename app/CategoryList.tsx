import { useState } from 'react';
import NavLinks from './NavLinks';
const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <ul>
        <li onClick={() => handleCategoryClick('Shop')}>Shop</li>
        <li onClick={() => handleCategoryClick('Radio')}>Radio Show</li>
        <li onClick={() => handleCategoryClick('Blog')}>Blog</li>
        <li onClick={() => handleCategoryClick('Newsletter')}>Newsletter</li>


        {/* Add more category items as needed */}
      </ul>
      <p>Selected category: {selectedCategory}</p>

      {selectedCategory === 'Blog' && <NavLinks />}
    </div>
  );
};

export default CategoryList;
