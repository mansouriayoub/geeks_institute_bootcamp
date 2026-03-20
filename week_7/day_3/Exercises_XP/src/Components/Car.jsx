import { useState } from "react";
import Garage from "./Garage";
import Events from "../Events";

const Car =({model})=>{
    const [color, setColor] = useState('Blue')
    const [size, setSize] = useState('small')
    return(
        <>
        <header>This car is <span style={{color:color}}>{color}</span> {model}.</header>
        <Garage size={size} />
        <Events />
        </>
    )
}
export default Car;