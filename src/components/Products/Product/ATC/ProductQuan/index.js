import React, { useState } from "react";
import "./index.scss";

export default function ProductQuan(props) {
  const {
    quan: [quan, setQuan]
  } = {
    quan: useState(""),
    ...(props.state || {})
  };

  const handleQuanUpdate = e => {
    console.log(e);
    setQuan(e.target.value);
  };
  return (
    <>
      <div className="quan">
        <input
          type="number"
          name="quantity"
          min="1"
          max="5"
          step="1"
          value={props.state.quan}
          onChange={handleQuanUpdate}
        />
      </div>
    </>
  );
}
