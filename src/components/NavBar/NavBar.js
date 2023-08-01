import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import { FormatingIcons } from "./FormatingIcons";
import { NavIcons } from "./NavIcons";
import useStyles from "../styles";

export const NavBar = ({ textReference, saveAsPDF, updateMarkdown }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar} position="sticky" elevation={0}>
      <Toolbar>
        <FormatingIcons
          textReference={textReference}
          updateMarkdown={updateMarkdown}
        />
        <div className={classes.otherIcons}>
          <NavIcons saveAsPDF={saveAsPDF} />
        </div>
      </Toolbar>
    </AppBar>
  );
};
