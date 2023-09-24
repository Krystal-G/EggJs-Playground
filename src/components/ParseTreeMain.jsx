import { Typography } from "@mui/material";
import React from "react";
import { MainState } from "../context/GlobalState";
import ParseTreeNode from "./ParseTreeNode";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const ParseTreeMain = ({ data }) => {
  const { parseError, code } = MainState();
  if (code === "") {
    return <div style={{display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center", color: "#ffa500"}}>
      <WarningAmberIcon style={{fontSize: "60px"}}></WarningAmberIcon>
      <Typography variant="h6">No Code To Parse</Typography>
    </div>;
  } else if (parseError !== "") {
    return <div style={{display: "flex", flexDirection: "column", marginTop: "20px", alignItems: "center", paddingLeft: "10px", color: "#ff0000"}}>
      <ErrorOutlineIcon style={{fontSize: "60px"}}></ErrorOutlineIcon>
      <Typography variant="h6">{`Please check your code..Getting:- ${parseError}`}</Typography>
    </div>;
  } else {
    return (
      <ul style={{paddingLeft: "10px", borderLeft: "1px solid black"}}>
        {data?.map((item, index) => (
          <ParseTreeNode node={item} key={index} />
        ))}
      </ul>
    );
  }
};

export default ParseTreeMain;

