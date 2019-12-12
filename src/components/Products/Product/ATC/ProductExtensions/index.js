import React, { useContext, useState } from "react";
import "./index.scss";
import { ExtensionContext } from "../../../../../App";

export default function ProductExtensions(props) {
  const { ItemID } = props;

  const [state, setState] = useState({
    ItemID: ItemID
  });

  const handleChange = e => {
    const value = e.target.value;
    console.log(value);
    setState({
      ...state,
      [e.target.name]: value
    });

    // Create state in ATCCard component. [InvtID, SetInvtID]
    // Pass down to here as prop
    // setInvtID(Object.values(state).join(""));
    // Currently concatenating the ExtensionCodeName rather than extension code
    // Also need to control the order they're concatenating in.
    // Currently, fist set selection is the first extension in state
    // Maybe set state using extensionObj before handleChange can get called
    const str = Object.values(state).join("");
    console.log("str", str);
    // setInvtID()
  };

  const allExtensions = useContext(ExtensionContext);

  const extensions = allExtensions.filter(extension => {
    return extension.ItemID === ItemID;
  });

  let extensionObj = {};

  extensions.forEach(extension => {
    extensionObj[extension.ExtensionName] = [];
  });
  for (let [name, val] of Object.entries(extensionObj)) {
    for (let extension of extensions) {
      if (extension.ExtensionName === name) {
        val.push(extension.ExtensionCodeName);
      }
    }
  }

  const extensionList = Object.keys(extensionObj).map(function(key, i) {
    const name = key.replace(/ /g, "_");
    return (
      <div className="select is-rounded" key={key}>
        <select name={name} onChange={handleChange} value={state[name]}>
          <option>{key}</option>
          {extensionObj[key].map(ext => {
            return <option key={ext}>{ext}</option>;
          })}
        </select>
      </div>
    );
  });

  return (
    <>
      <form>{extensionList}</form>
    </>
  );
}
