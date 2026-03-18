import { useState } from "react";
import Garage from "./Garage";

const Car =({model})=>{
    const [color, setColor] = useState('Blue')
    let size = 'small'
    return(
        <>
        <header>This car is <span style={{color:color}}>{color}</span> {model}.</header>
        <Garage size={size} />
        </>
    )
}
export default Car;