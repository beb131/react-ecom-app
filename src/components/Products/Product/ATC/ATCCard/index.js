import React, { useState, useEffect } from "react";
import "./index.scss";
import ATCButton from "../ATCButton/index";
import ProductExtensions from "../ProductExtensions/index";
import ProductPricing from "../ProductPricing/index";
import ProductQuan from "../ProductQuan/index";
import PropTypes from "prop-types";

export default function ATCCard(props) {
  const { ItemName, Type, ItemID } = props;

  const [InvtID, setInvtID] = useState(ItemID);
  const [quan, setQuan] = useState(1);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price);
  const [finalItem, setItem] = useState({});

  useEffect(() => {
    setTotalPrice(price * quan);
  }, [InvtID, quan, price]);

  useEffect(() => {
    setItem({
      ItemName: ItemName,
      InvtID: InvtID,
      quan: quan,
      price: price,
      totalPrice: totalPrice
    });
  }, [ItemName, InvtID, quan, price, totalPrice]);
  return (
    <>
      <div className="atc card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{ItemName}</p>
            </div>
          </div>
          <div className="content">
            <ProductPricing
              InvtID={InvtID}
              ItemID={ItemID}
              state={{ price: [price, setPrice] }}
            />
            {Type === "PG" && (
              <ProductExtensions
                ItemID={ItemID}
                state={{ InvtID: [InvtID, setInvtID] }}
              />
            )}
            <ProductQuan state={{ quan: [quan, setQuan] }} />
          </div>
          <ATCButton product={finalItem} />
        </div>
      </div>
    </>
  );
}

ATCCard.propTypes = {
  ItemName: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  ItemID: PropTypes.string.isRequired
};
