import * as React from "react";
import { Route, Switch } from "react-router-dom";
import { HomePage } from "../views/HomePage";
import UI from "../views/UI";
import { EconomyNewsPage } from "../views/EconomyNewsPage";
import { TecnologyNewsPage } from "../views/TecnologyNewsPage";
import { DolarNewsPage } from "../views/DolarNewsPage";
import { ViajesTurismoNewsPage } from "../views/ViajesTurismoPage";
import { FinanzasNews } from "../views/FinanzasNews";


export const Routes: React.FC = () => {
  return (
    <>
      <UI />
      <Switch>
       <Route exact path={"/economy-news"} component={EconomyNewsPage} />
       <Route exact path={"/dolar-news"} component={DolarNewsPage} />
       <Route exact path={"/viajes-turismo-News"} component={ViajesTurismoNewsPage} />
       <Route exact path={"/finanzas-news"} component={FinanzasNews} />
       <Route exact path={"/tecnology-news"} component={TecnologyNewsPage} />
        <Route exact path={"/home"} component={HomePage} />
        <Route path={"/**"} component={HomePage} />
      </Switch>
    </>
  );
};
