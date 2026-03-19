import './App.css'
import Car from './Components/Car';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
     <Car model={carinfo.model} />
    </>
  )
}

export default App
