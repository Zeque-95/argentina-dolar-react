import * as React from "react";
import { makeStyles } from "@material-ui/core";
import { List as MuiList } from "@material-ui/core";

const useListStyles = makeStyles(
  {
    padding: {
      paddingTop: "0px",
      paddingBottom: "0px",
    },
  },
  { name: "MuiList" }
);

const useListItemStyles = makeStyles(
  {
    root: {
      fontFamily: "Alata",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "26px",
      color: "#2E2E2E",
      minWidth: "160px",
    },
  },
  { name: "MuiMenuItem" }
);

export const List: React.FC = (props) => {
  useListItemStyles();
  const classesList = useListStyles();
  return <MuiList className={classesList.padding}>{props.children}</MuiList>;
};
