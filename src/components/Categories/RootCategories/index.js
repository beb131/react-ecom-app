import React, { useContext } from "react";
import "./index.scss";
import CategoryCard from "../CategoryCard/index";
import { CategoryContext } from "../../../App";

export default function RootCategories() {
  const categories = useContext(CategoryContext);

  const categoryList = categories.map(category => {
    return category.CategoryLevel === 0 ? (
      <CategoryCard key={category.CategoryID} category={category} />
    ) : null;
  });
  return (
    <>
      <div id="products">{categoryList}</div>
    </>
  );
}
