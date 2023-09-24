import React, { useState } from "react";
import ParseTreeMain from "./ParseTreeMain";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const ParseTreeNode = ({ node }) => {
  const { type } = node;
  const [showChildren, setShowChildren] = useState(true);
  const handleClick = () => {
    setShowChildren(!showChildren);
  };
  if (type === "value") {
    return (
      <>
        <div
          onClick={handleClick}
          style={{
            marginBottom: "10px",
            backgroundColor: "#3b3b3b",
            color: "#34b234",
            paddingLeft: "10px"
          }}
        >
          <span>
            {node.value} (type: {type})
          </span>
        </div>
      </>
    );
  } else if (type === "word") {
    return (
      <>
        <div
          onClick={handleClick}
          style={{
            marginBottom: "10px",
            backgroundColor: "3b3b3b",
            color: "#ffa500",
            paddingLeft: "10px"
          }}
        >
          <span>
            {node.name} (type: {type})
          </span>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div onClick={handleClick} style={{ marginBottom: "10px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#2b2b2b",
              color: "#ffffff",
            }}
          >
            {showChildren ? (
              <KeyboardArrowDownIcon />
            ) : (
              <KeyboardArrowRightIcon />
            )}
            {node?.operator?.name} (type: {type})
          </div>
        </div>
        <ul style={{ paddingLeft: "10px",  }}>
          {showChildren && <ParseTreeMain data={node.args} />}
        </ul>
      </>
    );
  }
};

export default ParseTreeNode;
