import { PlayArrow } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { MainState } from "../context/GlobalState";
import ParseTreeMain from "./ParseTreeMain";
import { run } from "../scripts/run";

const ParseTree = () => {
  const {
    parseTree,
    parseError,
    setLoading,
    setRunError,
    setOutput,
  } = MainState();

  const handleRun = () => {
    try {
      setLoading(true);
      setOutput("");
      setRunError("");
      // console.log("Inside handle run");
      if (parseError !== "") {
        setRunError(parseError);
        setLoading(false);
        return;
      }
      // console.log("Hello");
      console.log(run(parseTree));
      // const returnedOutput = await run(parseTree);
      setOutput(run(parseTree));
      setLoading(false);
    } catch (error) {
      setRunError(error);
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        gridColumn: "2 / 3",
        gridRow: "2 / 3",
        backgroundColor: "#333",
        display: "flex",
        flexDirection: "column",
        border: "2px solid #6bd4ff",
        overflowY: "auto",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          size="small"
          variant="contained"
          endIcon={<PlayArrow />}
          style={{
            backgroundColor: "#28a745",
            marginLeft: "10px",
            marginTop: "10px",
            marginBottom: "10px",
            marginRight: "10px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          }}
          onClick={handleRun}
        >
          Run
        </Button>
      </div>
      <div style={{ flexGrow: "1", overflowY: "auto" }}>
        <ParseTreeMain data={[parseTree]} />
      </div>
    </div>
  );
};

export default ParseTree;
