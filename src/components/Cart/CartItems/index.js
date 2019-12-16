import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function CartItems(props) {
  const { ItemID, InvtID, ItemName, Image, USD_Price, ProductURL } = props.item;
  const { handleRemoveFromCart } = props;
  return (
    <>
      <div className="card" key={ItemID}>
        <Link to={`/products/${ProductURL}`}>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={Image} alt="Placeholder" />
            </figure>
          </div>
        </Link>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <Link to={`/products/${ProductURL}`}>
                <p className="title is-4">{ItemName}</p>
              </Link>
            </div>
          </div>
          <div className="content">
            <div className="price">${USD_Price.toFixed(2)}</div>
            <button
              className="button is-danger"
              onClick={handleRemoveFromCart.bind(this, InvtID)}
            >
              Remove From Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
