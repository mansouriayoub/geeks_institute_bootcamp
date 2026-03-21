import { useState } from "react"

const Forms =()=>{
    const [username, setUsername] = useState('')

    const handleName =(e)=>{
        setUsername(e.target.value)
    }

    let header = '';
    if(username) header = <h1>Hello {username} </h1>

    const mySubmitHandler =(e)=>{
        e.preventDefault()
        alert(`You are submitting ${username}`)
    }

    return (
        <form  onSubmit={mySubmitHandler}>
            {header}
            <label htmlFor="name">Enter your name</label>
            <input type="text" name="name" id="name" onChange={handleName} />
            <input type="submit" value="submit" />
        </form>
    )
}
export default Forms