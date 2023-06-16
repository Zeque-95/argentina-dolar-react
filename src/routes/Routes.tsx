import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import UI from "../views/UI";
import { EconomyNewsPage } from "../views/EconomyNewsPage";

export const Routes: React.FC = () => {
  return (
    <>
      <UI />
      <Switch>
       <Route exact path={"/economy-news"} component={EconomyNewsPage} />
        <Route exact path={"/home"} component={HomePage} />
        <Route path={"/**"} component={HomePage} />
      </Switch>
    </>
  );
};
