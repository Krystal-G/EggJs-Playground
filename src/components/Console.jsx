import { CircularProgress, Typography } from "@mui/material";
import React from "react";
import { MainState } from "../context/GlobalState";

const Console = () => {
  const { output, runError, loading } = MainState();
  // const loading = false;
  // const runError = "";
  // const output = 10;
  if (loading) {
    return (
      <div
        style={{
          gridColumn: "1/ 3",
          gridRow: "3 / 4",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1e1e1e",
        }}
      >
        <Typography
          variant="body1"
          style={{
            backgroundColor: "black",
            color: "#fff",
            textAlign: "center",
          }}
        >
          Console
        </Typography>
        <div
          style={{
            flexGrow: "1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress />
        </div>
      </div>
    );
  } 
  else {
    return (
      <div
        style={{
          gridColumn: "1/ 3",
          gridRow: "3 / 4",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#1e1e1e",
          // overflowX: "auto",
          overflowY: "auto"
        }}
      >
        <Typography
          variant="body1"
          style={{
            backgroundColor: "black",
            color: "#fff",
            textAlign: "center",
            width: "100%"
          }}
        >
          Output
        </Typography>
        <div style={{color:runError!==""?"#f00":"#fff", paddingLeft: "10px", paddingTop: "10px"}}>{runError!=="" ? `${runError}` : output}</div>
      </div>
    );
  }
};

export default Console;
