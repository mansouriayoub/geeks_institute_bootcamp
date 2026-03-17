import './App.css'
import Car from './Components/Car';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
    {/* <h1> */}
     <Car model={carinfo.model} />
    {/* </h1> */}
    </>
  )
}

export default App
