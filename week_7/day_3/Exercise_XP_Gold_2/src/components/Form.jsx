import { useState } from "react"

const Form =()=>{
    const [book, setBook] = useState({
        title:'',
        author:'',
        genre:'',
        yearReleased:''
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e)=>{
        const {name, value} = e.target
        setBook(prevBook=>({
            ...prevBook,
            [name]: value
        }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        console.log(book);
        setSubmitted(true);
    }

    

    return(
        <>
            <h1>New Book</h1>
            {submitted ? <span>Success Message</span> : ''}
            <form onSubmit={handleSubmit}>
                <input type="text" name='title'  onChange={handleChange} />
                <input type="text" name='author'  onChange={handleChange} />
                <input type="text" name='genre'  onChange={handleChange} />
                <input type="text" name='yearReleased'  onChange={handleChange} />
                <input type="submit" value='submit' />
            </form>
        </>
    )
}
export default Form