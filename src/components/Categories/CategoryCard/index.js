import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function CategoryCard(props) {
  console.log(props);
  const {
    CategoryID,
    CategoryName,
    Descr,
    Image,
    CategoryLevel,
    SubDir,
    sortIndex
  } = props.category;
  return (
    <>
      <div className="card ">
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
          {/* <div className="content">
            <div className="excerpt">{Descr}</div>
          </div> */}
        </div>
      </div>
    </>
  );
}
