import React, { useContext } from "react";
import "./index.scss";
import { InventoryContext } from "../../../../../App";

export default function ProductPricing(props) {
  const { ItemID, InvtID } = props;
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

  return (
    <>
      {thisInvtItem[0] ? (
        <div>
          <div>
            <del>{`$${thisInvtItem[0].USD_ListPrice.toFixed(2)}`}</del>
          </div>
          <div>{`$${thisInvtItem[0].USD_Price.toFixed(2)}`}</div>
        </div>
      ) : (
        <div>
          <div>
            <del>{`$${getMinListPrice.toFixed(2)} - $${getMaxListPrice.toFixed(
              2
            )}`}</del>
          </div>
          <div>{`$${getMinPrice.toFixed(2)} - $${getMaxPrice.toFixed(2)}`}</div>
        </div>
      )}
    </>
  );
}
