import './App.css'

// 1 - criação de form 
import { MyForm } from './components/MyForm'
function App() {

  return (
    <>
      <h1>Form no React</h1>
      <MyForm  userName='Elson' userEmail='elson.sn314@gmail.com'/>
    </>
  )
}

export default App