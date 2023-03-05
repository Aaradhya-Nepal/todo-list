import React, { useState } from "react";
import "../styles/category.scss";

const Category = () => {
  const emptyCategory = {
    id: 0,
    name: "",
  };
  const [category, setCategory] = useState(emptyCategory);
  const [categories, setCategories] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

  const handleCategory = () => {
    setShowCategory(!showCategory);
  };

  const handleChange = (e) => {
    setCategory({
      ...category,
      name: e.target.value,
    });
  };

  const handleAdd = () => {
    setCategories([...categories, category]);
    setCategory({
      ...emptyCategory,
      id: category.id + 1,
    });
  };

  return (
    <>
      <div className="category-container">
        <div className="category-field" onClick={handleCategory}>
          {/* {category} */}
        </div>
        {showCategory && (
          <div className="category-field">
            <div className="category-input-field">
              <input
                type="text"
                value={category.name}
                onChange={handleChange}
              />
              <button onClick={handleAdd}>Click me</button>
            </div>
            <div className="category-lists">
              {categories &&
                categories.map((c) => <option key={c.id}>{c.name}</option>)}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
