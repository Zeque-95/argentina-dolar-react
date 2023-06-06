import * as React from "react";
import { ArgentinaDolarService } from "../services/ArgentinaDolarService";
import { dolar } from "../domain/dolar";
import { DolarComponent } from "../components/DolarComponent";

export const UI: React.FC = () => {
  const [dolars, setDolars] = React.useState<dolar[]>([]);
  React.useEffect(() => {
    ArgentinaDolarService.getHome().then((home) => {
      setDolars(home);
    });
  }, []);
  return <>
  {dolars.map((value,index) => {
      return(<DolarComponent dolar={value} key={index}/>) 
  })};</>;
};
