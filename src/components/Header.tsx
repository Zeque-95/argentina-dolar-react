import * as React from "react";
import { makeStyles, Tooltip } from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useHeaderStyles = makeStyles(() => ({
  avatar: {
    display: "flex",
    "& > *": {
      margin: 0,
    },
    marginRight: "30px",
    marginLeft: "6px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  flex: {
    flex: 1,
    height: "100%",
  },
  logoClickable: {
    cursor: "pointer",
  },
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    color: "#555",
    width: "100%",
    backgroundColor: "#3a5a40",
    boxShadow: "0px 15px 19px rgba(47, 65, 81, 0.04)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "sticky",
    zIndex: 1,
    height: "62px",
    marginTop:"0",
  },
}));

interface IHeaderProps {
  readonly tooltipText: string;
  readonly leftLinks?: React.ReactNode;
  readonly rightLinks?: React.ReactNode;
  readonly logoSrc?: string;
  readonly onClickLogo?: () => void;
}

export const Header: React.FC<IHeaderProps> = (props) => {
  const { leftLinks, rightLinks, tooltipText, logoSrc, onClickLogo } = props;
  const classes = useHeaderStyles();

  const avatar = (
    <div style={{ position: "relative" }}>
      <Tooltip
        title={tooltipText}
        aria-label="logo"
        placement="bottom-start"
        onClick={onClickLogo}
        className={onClickLogo ? classes.logoClickable : undefined}
      >
        {logoSrc === undefined ? (
          <div aria-label="logo" className={classes.avatar}>
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="20.5" cy="20.5" r="20.5" fill="#10a35d" />
            </svg>
          </div>
        ) : (
          <img
            aria-label="logo"
            src={`${logoSrc}`}
            alt="Logo"
            className={classes.avatar}
          />
        )}
      </Tooltip>
    </div>
  );

  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {leftLinks ? avatar : null}
        <div className={classes.flex}>
          {leftLinks ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            avatar
          )}
        </div>
        {rightLinks ? <div>{rightLinks}</div> : null}
      </Toolbar>
    </AppBar>
  );
};
