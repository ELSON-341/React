import { useState } from 'react'
import './App.css'

// 2 - importando componente
import FirstComponets from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpressions'

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* 3 - comentorio JSX */}
     <h1>Fundamentos do react</h1>
     <FirstComponets></FirstComponets>
     <TemplateExpression></TemplateExpression>
     <MyComponent></MyComponent>
    </>
  )
}

export default App