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
    let userValue = category.name;
    let inputValue = categories.find((a) => a.name === userValue);
    if (!categories.includes(inputValue)) {
      setCategories([...categories, category]);
      setCategory({
        ...emptyCategory,
        id: category.id + 1,
      });
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <>
      <div className="category-container">
        <div className="category-field" onClick={handleCategory}>
          Category
        </div>
        {showCategory && (
          <div className="category-field">
            <div className="category-input-field">
              <input
                type="text"
                value={category.name}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div className="category-lists">
              {categories &&
                categories.map((c) => (
                  <div key={c.id}>
                    <option key={c.id}>{c.name}</option>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
