import './App.css'
import Car from './Components/Car';
import Phone from './Components/Phone';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"};

  return (
    <>
     <Car model={carinfo.model} />
     <Phone />
    </>
  )
}

export default App
