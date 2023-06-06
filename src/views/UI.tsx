import * as React from "react";
import { ArgentinaDolarService } from "../services/ArgentinaDolarService";
import { dolar } from "../domain/dolar";
import { DolarComponent } from "../components/DolarComponent";
import { Backdrop, CircularProgress } from "@material-ui/core";

export const UI: React.FC = () => {
  const [loading, setLoading] = React.useState<boolean>(false);

  const [dolars, setDolars] = React.useState<dolar[]>([]);

  React.useEffect(() => {
    setLoading(true);
    ArgentinaDolarService.getHome()
      .then((home) => {
        setDolars(home);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Backdrop open={true} >
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }

  return (
    <>
      {dolars.map((value, index) => {
        return <DolarComponent dolar={value} key={index} />;
      })}
      ;
    </>
  );
};
