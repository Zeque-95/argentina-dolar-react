import * as React from "react";

export const Typography: React.FC= (props) => {
    return <h1 style={{fontFamily: "Alata"}}>{props.children}</h1>
}