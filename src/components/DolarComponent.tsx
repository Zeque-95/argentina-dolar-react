import * as React from "react";
import { dolar } from "../domain/dolar";


interface DolarComponentProps {
  dolar: dolar;
}
export const DolarComponent: React.FC<DolarComponentProps> = (props) => {
  return (
    <>
      <div style={{minWidth: "200px", border: "1px solid black", borderRadius: "20px",}}>
        <div style={{ border: '5px'}}>
          <p style={{fontSize: "26px", backgroundColor: '#588157', padding:'0px', margin:'0px'}}>{props.dolar.name}</p>
          <p style={{backgroundColor:'#a3b18a', margin:'0px', padding:'10px'}}>{props.dolar.sale}</p>
          <p>{props.dolar.variation}</p>
        </div>
      </div>
    </>
  );
};
