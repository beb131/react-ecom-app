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
    setQuan(parseInt(e.target.value));
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
      <div id="quan">
        <input
          type="number"
          name="quantity"
          min="1"
          max="999"
          step="1"
          value={quan}
          onChange={handleQuanUpdate}
          onKeyDown={formatInput}
        />
      </div>
    </>
  );
}
