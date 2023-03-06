import React, { useState } from "react";
import "../styles/category.scss";
import { RiDeleteBin5Line } from "react-icons/ri";

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

  const handleDelete = (id) => {
    setCategories((c) => {
      return c.filter((ca) => ca.id !== id);
    });
  };

  return (
    <>
      <div className="category-container">
        <div
          id="display-category"
          className="category-field"
          onClick={handleCategory}
        >
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
                  <div key={c.id} className="options">
                    <div className="option-name">
                      <option value={c.name}>{c.name}</option>
                    </div>
                    <div className="delete-category">
                      <RiDeleteBin5Line onClick={() => handleDelete(c.id)} />
                    </div>
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
