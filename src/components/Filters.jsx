import { useState } from 'react';
import './Filters.css';

function Filter({ onCategoryChange }) {
  const [category, setCategory] = useState(''); // Estado para la categoría

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onCategoryChange(selectedCategory);
  };

  return (
    <div className="filter">
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Todas las categorías</option>
        <option value="gorras">Gorras</option>
        <option value="hoodie">Hoodies</option>
        <option value="remeras">Remeras</option>
      </select>
    </div>
  );
}

export default Filter;
