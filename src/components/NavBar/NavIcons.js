import React from "react";
import { IconButton } from "@material-ui/core";
import PublishIcon from "@material-ui/icons/Publish";
import GetAppIcon from "@material-ui/icons/GetApp";

export const NavIcons = ({ saveAsPDF }) => {
  return (
    <div>
      <IconButton aria-label="upload">
        <PublishIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
      <IconButton
        aria-label="download"
        onClick={() => {
          saveAsPDF();
        }}
      >
        <GetAppIcon size="medium" style={{ fill: "white" }} />
      </IconButton>
    </div>
  );
};
