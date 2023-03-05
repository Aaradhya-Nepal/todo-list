import React, { useState } from "react";
import "../styles/category.scss";

const Category = () => {
  const [categoryName, setCategoryName] = useState(["Personal"]);
  const [showCategory, setShowCategory] = useState(false);

  const handleCategory = () => {
    setShowCategory(!showCategory);
  };

  const handleChange = (e) => {
    setCategoryName(e.target.value);
  };

  return (
    <>
      <div className="category-container">
        <div className="category-field" onClick={handleCategory}>
          {/* {categoryName} */}
        </div>
        {showCategory && (
          <div className="category-field">
            <div className="category-input-field">
              <input type="text" value={categoryName} onChange={handleChange} />
            </div>
            <div className="category-lists">
              <option value="personal">{categoryName}</option>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Category;
