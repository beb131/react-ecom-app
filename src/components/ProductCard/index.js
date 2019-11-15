import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <>
      <div className="card" key={props.id}>
        <Link to={`/products/${props.id}`}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={props.img} alt="Placeholder" />
            </figure>
          </div>
        </Link>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <Link to={`/products/${props.id}`}>
                <p className="title is-4">{props.name}</p>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="excerpt">{props.excerpt}</div>
            <div className="price"></div>
            <button className="button is-link" onClick={props.handleAddToCart}>
              Add To Cart - ${Number(props.price).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
