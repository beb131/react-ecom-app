import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function CartItems(props) {
  return (
    <>
      <div className="card" key={props.item.id}>
        <Link to={`/products/${props.item.id}`}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={props.item.img} alt="Placeholder" />
            </figure>
          </div>
        </Link>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <Link to={`/products/${props.item.id}`}>
                <p className="title is-4">{props.item.name}</p>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="excerpt">{props.item.excerpt}</div>
            <div className="price"></div>
            <button
              className="button is-danger"
              onClick={props.handleRemoveFromCart.bind(this, props.item)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
