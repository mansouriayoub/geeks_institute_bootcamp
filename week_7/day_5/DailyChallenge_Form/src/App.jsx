import { useState } from 'react'
import './App.css'
import countries from './components/Countries'

function App() {
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])

  const handleChange =(e)=>{
    const value = e.target.value

    if(value.length > 0){
      const filteredResult = countries.filter(country=>{
        country.toLowerCase().startsWith(value.toLowerCase())
      })
      setSuggestions(filteredResult)
      setText(value)
    }
  }

  const handleClick =(value)=>{
    setText(value)
    setSuggestions([])
  }

  return (
    <>
      <section id="center">
        <input value={text} onChange={handleChange} />
        <ul>
          {suggestions.map((suggestion, index)=>(
              <li key={index} onClick={()=>handleClick(suggestion)}> {suggestion} </li>
            ))}
        </ul>
      </section>
    </>
  )
}

export default App
