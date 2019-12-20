import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

export default function ProductInfo(props) {
  const { Description, ItemDetails, Image } = props;
  return (
    <>
      <img src={Image} alt="Placeholder" />
      <div>{Description}</div>
      <div>{ItemDetails}</div>
      <div className="tabs">
        <ul>
          <li className="is-active">
            <span>Description</span>
          </li>
          <li>
            <span>Details</span>
          </li>
        </ul>
      </div>
    </>
  );
}

ProductInfo.propTypes = {
  Description: PropTypes.string,
  ItemDetails: PropTypes.string,
  Image: PropTypes.string
};
