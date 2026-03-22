import './App.css'
import Clock from './components/Clock'
import Form from './components/Form'

function App() {

  return (
    <>
      <section id="center">
        <div className="hero">
          <Clock /> 
        </div>
      </section>
      <section id="center">
        <div className="hero">
          <Form /> 
        </div>
      </section>
    </>
  )
}

export default App
