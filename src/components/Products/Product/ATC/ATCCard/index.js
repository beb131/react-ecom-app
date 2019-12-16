import React, { useState } from "react";
import "./index.scss";
import ATCButton from "../ATCButton/index";
import ProductExtensions from "../ProductExtensions/index";
import ProductPricing from "../ProductPricing/index";

export default function ATCCard(props) {
  const { ItemName, type, ItemID } = props;

  const [InvtID, setInvtID] = useState(ItemID);
  // Reducer creates extensions
  // Reducer references InventoryContext to get price
  // Pass extension to ProductExtensions
  // Pass price to ProductPricing
  // Pass inventoryID to ATCButton
  // ATCButton Dispatches Action

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
            <ProductPricing InvtID={InvtID} ItemID={ItemID} />
            {type === "PG" && (
              <ProductExtensions
                ItemID={ItemID}
                state={{ InvtID: [InvtID, setInvtID] }}
              />
            )}
            <ATCButton InvtID={InvtID} />
          </div>
        </div>
      </div>
    </>
  );
}
