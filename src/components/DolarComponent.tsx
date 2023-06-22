import * as React from "react";
import { dolar } from "../domain/dolar";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Theme, createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
   rootUp:{
    fill:"green",
   },
   rootDown:{
    fill:"red",
   },

  })
);

interface DolarComponentProps {
  dolar: dolar;
}
export const DolarComponent: React.FC<DolarComponentProps> = (props) => {
  const classes = useStyles();

  const renderArrowIcon = () => {
    if (props.dolar.variation > 0) {
      return <ArrowDropUpIcon classes={{
        root: classes.rootUp
      }} />;
    }
    if (props.dolar.variation < 0) {
      return <ArrowDropDownIcon classes={{
        root: classes.rootDown,
      }} />;
    }
    return undefined;
  };

  return (
    <>
      <div
        style={{
          minWidth: "200px",
          border: "1px solid black",
          borderRadius: "20px",
        }}
      >
        <div style={{ border: "5px" }}>
          <p
            style={{
              fontSize: "26px",
              backgroundColor: "#588157",
              padding: "0px",
              margin: "0px",
            }}
          >
            {props.dolar.name}
          </p>
          <p
            style={{
              backgroundColor: "#a3b18a",
              margin: "0px",
              padding: "10px",
            }}
          >
            {props.dolar.sale}
          </p>
          <p>{props.dolar.variation}</p>
          {renderArrowIcon()}
        </div>
      </div>
    </>
  );
};
