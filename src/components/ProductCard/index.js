import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const handleClick = (item, e) => {
    console.log(e.target.closest(".card"));
    e.target.innerHTML = "Added To Cart - $20.00";
    props.handleAddToCart(item);
  };
  return (
    <>
      <div className="card ">
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
            {/* <div className="quan">
              <input type="number" name="quantity" min="1" max="5" value="1" />
            </div> */}
            <button
              className="button is-link"
              onClick={handleClick.bind(this, props.item)}
            >
              Add To Cart - ${Number(props.item.price).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
