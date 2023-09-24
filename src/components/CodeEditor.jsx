import React, { useEffect, useRef } from "react";
import { parse } from "../scripts/parse";
import { MainState } from "../context/GlobalState";

const CodeEditor = () => {
  const { code, setCode, setParseTree, setParseError } = MainState();
  const handleInput = (e) => {
    setCode(e.target.innerText);
    // console.log(code);
  };
  const genParseTree = () => {
    try {
      setParseError("");
      setParseTree(parse(code));
      // console.log(parseTree);
    } catch (error) {
      // console.log(code);
      setParseError(error);
      // console.log(error);
    }
  };

  useEffect(() => {
    genParseTree();
  }, [code]);

  const contentEditableRef = useRef(null);
  const handleKeyDown = (e) => {
    const selection = window.getSelection();
    let range = selection.getRangeAt(0);
    if (e.key === "Tab") {
      e.preventDefault();
      // Insert 4 spaces programmatically
      // const selection = window.getSelection();
      // const range = selection.getRangeAt(0);
      const tabNode = document.createTextNode("\u00a0\u00a0\u00a0\u00a0"); // Four spaces
      range.insertNode(tabNode);

      // Move the cursor/selection after the inserted spaces
      range.setStartAfter(tabNode);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  };

  return (
    <div
      contentEditable
      suppressContentEditableWarning={true}
      ref={contentEditableRef}
      onKeyDown={handleKeyDown}
      onInput={handleInput}
      style={{
        gridColumn: "1 / 2",
        gridRow: "2 / 3",
        backgroundColor: "#333333",
        overflowY: "auto",
        color: "#fff",
        border: "2px solid #2ba745",
        outline: "none",
        paddingLeft: "10px",
        paddingTop: "10px",
      }}
    ></div>
  );
};

export default CodeEditor;
