import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { ListItem as MuiListItem } from "@material-ui/core";

const useStyles = makeStyles({
  listItem: {
    color: "#2dc455 !important",
    zIndex: 99,
    float: "left",
    position: "relative",
    display: "block",
    width: "auto !important",
    margin: "0px !important",
    padding: "0px !important",
    border: "none !important",
  },
});

export const ListItem: React.FC = (props) => {
  const classes = useStyles();
  return (
    <MuiListItem className={classes.listItem}>{props.children}</MuiListItem>
  );
};
