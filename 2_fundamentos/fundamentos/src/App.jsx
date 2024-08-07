import './App.css'

// 2 - importando componente
import FirstComponets from './components/FirstComponent'

// 4 - template expression
import TemplateExpression from './components/TemplateExpressions'

// 5 - hierarquia de componentes
import MyComponent from './components/MyComponent'

// 6 - eventos
import Events from './components/Events'

// 6 

function App() {

  return (
    <>
    {/* 3 - comentario JSX */}
     <h1>Fundamentos do react</h1>
     <FirstComponets></FirstComponets>
     <TemplateExpression></TemplateExpression>
     <MyComponent></MyComponent>
     <Events></Events>
    </>
  )
}

export default App