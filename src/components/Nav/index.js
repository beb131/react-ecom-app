import React, { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../App";

export default function Nav() {
  const categories = useContext(CategoryContext);
  const links = categories.map(category => {
    // const { SubDir, CategoryID, CategoryName, CategoryLevel } = category;
    return category.CategoryLevel === 0 ? (
      <Link
        to={{
          pathname: `${category.SubDir}`,
          state: {
            CategoryID: category.CategoryID,
            CategoryName: category.CategoryName,
            CategoryLevel: category.CategoryLevel + 1
          }
        }}
        className="navbar-item"
        key={category.CategoryID}
      >
        {category.CategoryName}
      </Link>
    ) : null;
  });
  return <>{links}</>;
}
