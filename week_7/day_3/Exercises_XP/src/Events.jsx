import { useState } from "react";

const Events = ()=>{
    const clickMe = ()=>{
        alert('I was clicked');
    }

    const handleKeyDown=(e)=>{
        if (e.key === 'Enter') {   
            alert(`The Enter key was pressed, your input is: ${e.target.value}`)
        }
    }

    const [isToggleOn, setIsToggleOn] = useState(true)

    const handleToggleOn =()=>{
        setIsToggleOn(prev=>!prev)
    }

    return (
        <>
            <button onClick={clickMe}>Click me</button>
            <input type="text" onKeyDown={handleKeyDown} />
            <button onClick={handleToggleOn}>{isToggleOn ? 'ON' : 'OFF'}</button>
        </>
    )
}
export default Events