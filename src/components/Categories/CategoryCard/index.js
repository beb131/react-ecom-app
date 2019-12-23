import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  const { CategoryName, Headline, Image, SubDir } = props.category;

  return (
    <>
      <div className="category card">
        <Link to={SubDir}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={"https://curatedbyjw.com/" + Image} alt="Placeholder" />
            </figure>
          </div>
        </Link>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <Link to={SubDir}>
                <p className="title is-4">{CategoryName}</p>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="excerpt">{Headline}</div>
            <Link to={`${SubDir}`}>
              <button className="button is-link">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
