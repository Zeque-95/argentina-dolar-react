import * as React from "react";
import { News } from "../domain/News";
import { Typography } from "@material-ui/core";

interface INewsProps {
    readonly value : News;
}

export const NewsComponent : React.FC<INewsProps> = (props)=> {
    return <div>
        <Typography variant="h5">{props.value.title}</Typography>
        <img src={props.value.image} alt="" />
        <p>{props.value.content}</p>
        <a href={props.value.href} target="_blank">ver mas</a>
    </div>
}