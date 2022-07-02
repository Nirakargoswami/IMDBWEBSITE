import {Nevbar} from "../Component/Menubar"
import {MovieComponent} from "./MovieComponent"
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <>
        <Nevbar/>
       <h1 style={{marginTop:"20px"}} >Recent movie </h1>
        <MovieComponent/>
        </>
    )
}