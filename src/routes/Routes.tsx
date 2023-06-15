import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import UI from "../views/UI";
import { DollarNewsPage } from "../views/DollarNewsPage";

export const Routes: React.FC = () => {
  return (
    <>
      <UI />
      <Switch>
        <Route exact path={"/news/dollar-news"} component={DollarNewsPage} />
        <Route exact path={"/home"} component={HomePage} />
        <Route path={"/**"} component={HomePage} />
      </Switch>
    </>
  );
};
