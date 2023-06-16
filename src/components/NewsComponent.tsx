import * as React from "react";
import { News } from "../domain/News";

interface INewsProps {
    readonly value : News;
}

export const NewsComponent : React.FC<INewsProps> = (props)=> {
    return <div>
        <p>{props.value.title}</p>
        <img src={props.value.image} alt="" />
        <p>{props.value.content}</p>
    </div>
}