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
          extensionCode: extension.ExtensionCode,
          extensionOrder: extension.ExtensionOrder
        });
      }
    }
  }

  console.log(extensionObj);
  const extensionList = Object.keys(extensionObj).map(function(key, i) {
    const name = key.replace(/ /g, "_");
    console.log("key", key);
    console.log("this extension", extensionObj[key][i]);
    console.log("i", i);
    if (extensionObj[key][i].extensionOrder === i + 1) {
      console.log(key.ExtensionOrder);
      return (
        <div className="select is-rounded" key={key}>
          <select name={name} onChange={handleChange} value={state[name]}>
            <option value={""}>{key}</option>
            {extensionObj[key].map(
              ext => {
                // for (let j = 1; j <= extensionObj[key][j].OptionOrder; i++) {
                if (ext.OptionOrder === i) {
                  return (
                    <option
                      key={ext.extensionCodeName}
                      value={ext.extensionCode}
                    >
                      {ext.extensionCodeName}
                    </option>
                  );
                }
              }
              // }
            )}
          </select>
        </div>
      );
    }
  });

  return (
    <>
      <form>{extensionList}</form>
    </>
  );
}
