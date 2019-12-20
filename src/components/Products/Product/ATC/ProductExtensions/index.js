import React, { useContext, useState, useEffect } from "react";
import "./index.scss";
import { ExtensionContext } from "../../../../../App";
import PropTypes from "prop-types";

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

  // Begin Extension Handling
  const allExtensions = useContext(ExtensionContext);

  // Filter relevant items
  const prodExtensions = allExtensions.filter(extension => {
    return extension.ItemID === ItemID;
  });

  // Init object to add extensions to
  let extensionObj = {};

  // Create keys in extension Obj
  prodExtensions.forEach(extension => {
    extensionObj[extension.ExtensionName] = [];
    state[extension.ExtensionCodeName] = "";
  });

  for (let [name, val] of Object.entries(extensionObj)) {
    for (let extension of prodExtensions) {
      if (extension.ExtensionName === name) {
        val.push({
          extensionCodeName: extension.ExtensionCodeName,
          extensionCode: extension.ExtensionCode,
          extensionOrder: extension.ExtensionOrder,
          optionOrder: extension.OptionOrder
        });
      }
    }
  }

  // list.sort((a, b) =>
  //   a.color > b.color
  //     ? 1
  //     : a.color === b.color
  //     ? a.size > b.size
  //       ? 1
  //       : -1
  //     : -1
  // );

  const extensionList = Object.keys(extensionObj).map((key, i) => {
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
  // const extensionList = Object.keys(extensionObj).map((key, i) => {
  //   const name = key.replace(/ /g, "_");
  //   const maxOptionOrder =
  //     extensionObj[key][extensionObj[key].length - 1].optionOrder;
  //   // console.log(extensionObj[Object.keys(extensionObj).length][0].extensionOrder);
  //   console.log(Object.keys(extensionObj).length);

  //   for (let j = 1; j <= maxOptionOrder; j++) {
  //     if (extensionObj[key][extensionObj[key].length - 1].optionOrder === j) {
  //       return (
  //         <div className="select is-rounded" key={key}>
  //           <select name={name} onChange={handleChange} value={state[name]}>
  //             <option value={""}>{key}</option>
  //             {extensionObj[key].map(
  //               ext => {
  //                 // for (let j = 1; j <= extensionObj[key][j].OptionOrder; i++) {
  //                 if (ext.OptionOrder === i) {
  //                   return (
  //                     <option
  //                       key={ext.extensionCodeName}
  //                       value={ext.extensionCode}
  //                     >
  //                       {ext.extensionCodeName}
  //                     </option>
  //                   );
  //                 }
  //               }
  //               // }
  //             )}
  //           </select>
  //         </div>
  //       );
  //     }
  //     // console.log("this extension", extension);
  //     // console.log("i", i + 1);
  //     // console.log(extensionObj[extension][i].extensionOrder);
  //     // console.log(extension[i].extensionOrder);
  //   }
  // });

  return (
    <>
      <form>{extensionList}</form>
    </>
  );
}

ProductExtensions.propTypes = {
  ItemID: PropTypes.string.isRequired,
  state: PropTypes.exact({
    InvtID: PropTypes.array.isRequired
  })
};
