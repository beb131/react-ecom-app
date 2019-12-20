import React, { useState } from "react";
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
            {Type === "PG" && (
              <ProductExtensions
                ItemID={ItemID}
                state={{ InvtID: [InvtID, setInvtID] }}
              />
            )}
            <ProductQuan state={{ quan: [quan, setQuan] }} />
            <ATCButton InvtID={InvtID} />
          </div>
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
