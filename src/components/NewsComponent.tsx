import * as React from "react";
import { News } from "../domain/News";
import InfoIcon from "@material-ui/icons/Info";
import {
  IconButton,
  ImageListItem,
  ImageListItemBar,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core";
import { Typography } from "./Typography";

interface INewsProps {
  readonly value: News;
}

const useStyles = makeStyles<Theme>((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width: 500,
      height: 450,
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)",
    },
    iconInfo: {
      color: "#ffffff !important",
    },
    listItemRoot: {
      listStyle: "none",
    },
    listItem: {
      margin: "10px",
    },
    img: {
      maxWidth: "400px",
      maxHeight: "400px",
    },
  })
);

export const NewsComponent: React.FC<INewsProps> = (props) => {
  const classes = useStyles();

  return (
    <ImageListItem
      classes={{
        root: classes.listItemRoot,
        item: classes.listItem,
      }}
      key={props.value.image}
    >
      <img className={classes.img} src={props.value.image} alt={" "} />
      <ImageListItemBar
        title={props.value.title}
        actionIcon={
          <IconButton>
            <InfoIcon
              classes={{
                root: classes.iconInfo,
              }}
            />
          </IconButton>
        }
      />
    </ImageListItem>
  );
};
