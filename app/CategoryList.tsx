import { useState } from 'react';

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
    </div>
  );
};

export default CategoryList;
