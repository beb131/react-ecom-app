import React, { useState } from "react";
import "./index.scss";
// import { Link } from "react-router-dom";

export default function CartItem(props) {
  const { InvtID, ItemName, quan, price, totalPrice } = props.item;
  const { handleRemoveFromCart, handleQuanUpdate } = props;

  const [newQuan, setQuan] = useState(quan);

  const onQuanUpdate = e => {
    setQuan(e.target.value);
    handleQuanUpdate(props.item, e.target.value);
  };

  const formatInput = e => {
    // Prevent characters that are not numbers ("e", ".", "+" & "-") ✨
    let checkIfNum;
    if (e.key !== undefined) {
      checkIfNum =
        e.key === "e" || e.key === "." || e.key === "+" || e.key === "-";
    } else if (e.keyCode !== undefined) {
      // Check if it's a "e" (69), "." (190), "+" (187) or "-" (189)
      checkIfNum =
        e.keyCode === 69 ||
        e.keyCode === 190 ||
        e.keyCode === 187 ||
        e.keyCode === 189;
    }
    return checkIfNum && e.preventDefault();
  };

  return (
    <>
      <div className="cart card">
        <header className="card-header"></header>
        <footer className="card-footer">
          <div className="card-footer-item">
            {/* <Link to={`/products/${ProductURL}`}> */}
            <p className="card-header-title">{ItemName}</p>
            {/* </Link> */}
          </div>
          {/* Map extenions to card-footer-items */}
          {/* <div className="card-footer-item">'Extension'</div> */}
          <div className="card-footer-item">{`$${price.toFixed(2)}`}</div>
          <div className="card-footer-item">{`$${totalPrice.toFixed(2)}`}</div>
          <div className="card-footer-item">
            <div className="quan">
              <input
                type="number"
                name="quantity"
                min="1"
                step="1"
                value={newQuan}
                onChange={onQuanUpdate}
                onKeyDown={formatInput}
              />
            </div>
          </div>
          <div className="card-footer-item">
            <button
              className="button is-danger"
              onClick={handleRemoveFromCart.bind(this, InvtID)}
            >
              Remove From Cart
            </button>
          </div>
        </footer>
      </div>
    </>
  );
}
