import React, { useContext, useState, useEffect } from "react";
import "./index.scss";
import { ExtensionContext } from "../../../../../App";

export default function ProductExtensions(props) {
  const { ItemID } = props;

  const [state, setState] = useState({
    ItemID: ItemID
  });

  const {
    InvtID: [InvtID, setInvtID]
  } = {
    InvtID: useState(""),
    ...(props.state || {})
  };

  const handleChange = e => {
    const value = e.target.value;

    setState({
      ...state,
      [e.target.name]: value
    });
  };

  useEffect(() => {
    setInvtID(Object.values(state).join(""));
  }, [state, InvtID, setInvtID]);

  const allExtensions = useContext(ExtensionContext);

  const extensions = allExtensions.filter(extension => {
    return extension.ItemID === ItemID;
  });

  let extensionObj = {};

  extensions.forEach(extension => {
    extensionObj[extension.ExtensionName] = [];
    state[extension.ExtensionCodeName] = "";
  });

  for (let [name, val] of Object.entries(extensionObj)) {
    for (let extension of extensions) {
      if (extension.ExtensionName === name) {
        val.push({
          extensionCodeName: extension.ExtensionCodeName,
          extensionCode: extension.ExtensionCode
        });
      }
    }
  }

  const extensionList = Object.keys(extensionObj).map(function(key, i) {
    const name = key.replace(/ /g, "_");
    return (
      <div className="select is-rounded" key={key}>
        <select name={name} onChange={handleChange} value={state[name]}>
          <option value={""}>{key}</option>
          {extensionObj[key].map(ext => {
            return (
              <option key={ext.extensionCodeName} value={ext.extensionCode}>
                {ext.extensionCodeName}
              </option>
            );
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
