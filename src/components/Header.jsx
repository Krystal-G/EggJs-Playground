import React, { useState } from "react";
import EggIcon from "@mui/icons-material/Egg";
import { IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import GitHubIcon from "@mui/icons-material/GitHub";
import InfoBox from "./InfoBox";

const Header = () => {
  const [modal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  }
  const handleModalClose = () => {
    setModal(false);
  }

  return (
    <div
      style={{
        gridColumn: "1 / 3",
        gridRow: "1 / 2",
        backgroundColor: "#252525",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly" }}>
        <EggIcon sx={{ color: "#EEEEEE", marginLeft: "10px" }} />
        <Typography variant="h5" sx={{ color: "#EEEEEE", marginLeft: "10px" }}>
          EggJs Playground
        </Typography>
      </div>
      <div style={{display: "flex"}}>
        <IconButton aria-label="info" onClick={handleModalOpen}>
          <InfoIcon sx={{ color: "#EEEEEE" }} />
        </IconButton>
        <InfoBox open={modal} onClose={handleModalClose} />
        <IconButton aria-label="mode">
          <GitHubIcon sx={{ color: "#EEEEEE" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
