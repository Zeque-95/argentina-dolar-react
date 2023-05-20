import * as React from "react";
import { Routes } from "./Routes";
import { MemoryRouter as Router, Route } from "react-router-dom";

export const RoutesWrap: React.FC = () => {
  return (
    <>
      <Router>
        <Route component={Routes} />
      </Router>
    </>
  );
};
