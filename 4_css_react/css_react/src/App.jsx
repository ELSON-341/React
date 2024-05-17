// 2 - CSS de componente 
import { Mycomponent } from "./components/Mycomponent"
import './components/Mycomponent.css'

// 6 - css modules 
import { Title } from "./components/Title"
function App() {
  // 4 - CSS denâmico
  const n = 15

  // classe dinâmicas 
  const redTitle = true

  return (
    <>
      {/* 1 - CSS global */}
      <h1 className="title">CSS no React</h1>
      {/* 2 - CSS de componente */}
      <Mycomponent />
      <p>Pegou o css do componente</p>
      {/* 3 - inline style */}
      <p style={{color: 'blue', padding: '16px', borderTop: '1px dotted blue'}}>Este elemento tem estilo inline</p>
      {/* 4 - CSS denâmico */}
      <h2 style={n > 10 ? {color: 'orange'} : {color: 'purple'}}>CSS dinâmico</h2>
      {/* 5 - classe dinâmicas  */}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este título vai ter um classe</h2>
      {/* 6 - css modules */}
      <Title />
    </>
  )
}

export default App
