import React, { useContext, useState } from "react";
import "./index.scss";
import { InventoryContext } from "../../../../../App";
import PropTypes from "prop-types";

export default function ProductPricing(props) {
  const { ItemID, InvtID } = props;
  const {
    price: [price, setPrice]
  } = {
    price: useState(""),
    ...(props.state || {})
  };

  const InvtIDs = useContext(InventoryContext);

  const thisInvtItem = InvtIDs.filter(item => {
    return item.InvtID === InvtID;
  });

  const thisItem = InvtIDs.filter(item => {
    return item.ItemID === ItemID;
  });

  const getMinListPrice = thisItem.reduce(
    (min, item) => (item.USD_ListPrice < min ? item.USD_ListPrice : min),
    thisItem[0].USD_ListPrice
  );

  const getMaxListPrice = thisItem.reduce(
    (max, item) => (item.USD_ListPrice > max ? item.USD_ListPrice : max),
    thisItem[0].USD_ListPrice
  );

  const getMinPrice = thisItem.reduce(
    (min, item) => (item.USD_Price < min ? item.USD_Price : min),
    thisItem[0].USD_Price
  );

  const getMaxPrice = thisItem.reduce(
    (max, item) => (item.USD_Price > max ? item.USD_Price : max),
    thisItem[0].USD_Price
  );

  if (thisInvtItem[0]) {
    setPrice(thisInvtItem[0].USD_Price);
  } else {
    setPrice(0);
  }

  return (
    <>
      <div id="price">
        {thisInvtItem[0] ? (
          <>
            <div id="list_price">
              <del>{`$${thisInvtItem[0].USD_ListPrice.toFixed(2)}`}</del>
            </div>
            <div id="item_price">{`$${price.toFixed(2)}`}</div>
          </>
        ) : (
          <>
            <div id="list_price_range">
              <del>{`$${getMinListPrice.toFixed(
                2
              )} - $${getMaxListPrice.toFixed(2)}`}</del>
            </div>
            <div id="item_price_range">{`$${getMinPrice.toFixed(
              2
            )} - $${getMaxPrice.toFixed(2)}`}</div>
          </>
        )}
      </div>
    </>
  );
}

ProductPricing.propTypes = {
  ItemID: PropTypes.string.isRequired,
  InvtID: PropTypes.string.isRequired
};
