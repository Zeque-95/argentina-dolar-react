import * as React from "react";
import { dolar } from "../domain/dolar";
import { Button, Container } from "@material-ui/core";




interface DolarComponentProps {
  dolar: dolar;
}
export const DolarComponent: React.FC<DolarComponentProps> = (props) => {
  return (
    <>
    <Container maxWidth="xs">
      <div style={{ margin: "20px"}}>{props.dolar.name}
      <p>{props.dolar.sale}</p>
      <p>{props.dolar.variation}</p>
      <Button variant="contained"> boton </Button>
      </div>
      </Container>
    </>
  );
};
