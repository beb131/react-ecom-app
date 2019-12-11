import React, { useContext } from "react";
import "./index.scss";
import ATCButton from "../ATCButton/index";
import ProductExtensions from "../ProductExtensions/index";
import ProductPricing from "../ProductPricing/index";
import { ExtensionContext } from "../../../../../App";

export default function ATCCard(props) {
  const { ItemName, type, ItemID } = props;

  const allExtensions = useContext(ExtensionContext);

  const extensions = allExtensions.filter(extension => {
    return extension.ItemID === ItemID;
  });

  const extensionGroups = [
    ...new Set(extensions.map(extension => extension.ExtensionGroupID))
  ];
  console.log(extensionGroups);

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
            {type === "PG" && <ProductExtensions />}
            <ATCButton ItemID={ItemID} />
          </div>
        </div>
      </div>
    </>
  );
}
