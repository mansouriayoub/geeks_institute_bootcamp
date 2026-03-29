import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  const [inputValue, setInputValue] = useState('')
  const [postResponse, setPostResponse] = useState()

  useEffect(() => {
    const fetchMessage = async ()=>{
      try {
        const response = await fetch('/api/hello')

        // If response is plain text:
        const text = await response.text()
        setMessage(text)

        // If response is JSON instead, use:
        // const data = await response.json();
        // setMessage(data.message);

      } catch (error) {
        console.error('Error fetching data', error);
      }
    }
    fetchMessage()

  }, []);

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const response = await fetch("/api/world",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({value: inputValue})
        });
      const result = await response.text();
      setPostResponse(result)
      console.log(result);
  }

  return (
    <>
      <section id="center">
        <div className="hero">
          <h1>{message}</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <input value={inputValue} onChange={e=>setInputValue(e.target.value)} />
            <button type="submit">Submit</button>
          </form>
        </div>
        <p>{postResponse}</p>
      </section>
    </>
  );
}

export default App;