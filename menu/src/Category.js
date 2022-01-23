import React from "react";

const Category = ({ category, filterItems }) => {
  //console.log(category);
  return (
    <div className="type">
      {category.map((type, index) => {
        return (
          <button type="button" key={index} onClick={() => filterItems(type)}>
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default Category;
