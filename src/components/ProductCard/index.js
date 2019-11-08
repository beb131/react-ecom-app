import React from "react";
import "./index.scss";

export default function ProductCard(props) {
  return (
    <>
      <div className="card" key={props.id}>
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={props.img} alt="Placeholder" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{props.name}</p>
            </div>
          </div>

          <div className="content">
            <div className="description">{props.desc}</div>
            <div className="price">{props.price}</div>
          </div>
        </div>
      </div>
    </>
  );
}
