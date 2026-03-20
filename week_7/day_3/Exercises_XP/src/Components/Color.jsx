import { useEffect, useState } from "react"

const Color=()=>{
    const [favoriteColor, setFavoriteColor] = useState('red')

    useEffect(()=>alert('useEffect reached'))

    const handleColor =()=>setFavoriteColor('blue')

    return (
        <>
        <h1>My favorite color is <i>{favoriteColor}</i></h1>
        <button onClick={handleColor} >Change favorite color</button>
        </>
    )
}
export default Color