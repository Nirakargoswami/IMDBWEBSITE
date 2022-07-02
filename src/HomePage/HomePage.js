import {Nevbar} from "../Component/Menubar"
import {MovieComponent} from "./MovieComponent"
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
        <>
        <Nevbar/>
        
        <MovieComponent/>
        </>
    )
}