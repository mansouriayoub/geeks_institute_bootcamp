import { useState } from "react";

const Car =({model})=>{
    const [color, setColor] = useState('Blue')
    return(
        <header>This car is <span style={{color:color}}>{color}</span> {model}.</header>
    )
}
export default Car;