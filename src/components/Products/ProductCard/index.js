import React, { useContext } from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const {
    // invtID,
    ItemName,
    Description,
    ItemDetails,
    Image,
    Type,
    Keywords,
    MetaDescription,
    ProductURL,
    ItemID
    // USD_ListPrice,
    // USD_Price,
    // stkItem,
    // qtyAvail
  } = props.product;

  const handleClick = (product, e) => {
    e.target.innerHTML = "Added To Cart - $20.00";
    props.handleAddToCart(product);
  };

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
            {/* <div className="excerpt">{Description}</div> */}
            {/* <div className="quan">
              <input type="number" name="quantity" min="1" max="5" value="1" />
            </div> */}
            {/* <button
              className="button is-link"
              onClick={handleClick.bind(this, props.product)}
            >
              Add To Cart - ${Number(USD_Price).toFixed(2)}
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
