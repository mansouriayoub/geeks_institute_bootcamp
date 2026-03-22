import './App.css'
import Form from './components/Form'
import Form2 from './components/Form2'

function App() {

  return (
    <>
      <Form />
      {
        Form2.user ? Form2.user : <Form2 />
      }
    </>
  )
}

export default App
