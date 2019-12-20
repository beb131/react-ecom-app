import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function ProductCard(props) {
  const { ItemName, Headline, Image, ProductURL } = props.product;

  return (
    <>
      <div className="card ">
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
            <div className="excerpt">{Headline}</div>
            <Link to={`/products/${ProductURL}`}>
              <button className="button is-link">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
