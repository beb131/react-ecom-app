import React, { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { CategoryContext } from "../../App";

export default function Nav() {
  const categories = useContext(CategoryContext);
  const links = categories.map(category => {
    const { SubDir, CategoryID, CategoryName, CategoryLevel } = category;
    return CategoryLevel === 0 ? (
      <Link to={SubDir} className="navbar-item" key={CategoryID}>
        {CategoryName}
      </Link>
    ) : null;
  });
  return <>{links}</>;
}
