import * as React from "react";
import { dolar } from "../domain/dolar";

interface DolarComponentProps {
  dolar: dolar;
}
export const DolarComponent: React.FC<DolarComponentProps> = (props) => {
  return (
    <>
      <div style={{minWidth: "200px"}}>
        <div style={{ backgroundColor: "blue"}}>
          <p style={{fontSize: "26px"}}>{props.dolar.name}</p>
          <p>{props.dolar.sale}</p>
          <p>{props.dolar.variation}</p>
        </div>
      </div>
    </>
  );
};
