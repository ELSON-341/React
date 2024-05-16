// 2 - CSS de componente 
import { Mycomponent } from "./components/Mycomponent"
import './components/Mycomponent.css'
function App() {
  // 4 - CSS denâmico
  const n = 15

  // classe dinâmicas 
  const redTitle = false

  return (
    <>
      {/* 1 - CSS global */}
      <h1>CSS no React</h1>
      {/* 2 - CSS de componente */}
      <Mycomponent />
      <p>Pegou o css do componente</p>
      {/* 3 - inline style */}
      <p style={{color: 'blue', padding: '16px', borderTop: '1px dotted blue'}}>Este elemento tem estilo inline</p>
      {/* 4 - CSS denâmico */}
      <h2 style={n > 10 ? {color: 'orange'} : {color: 'purple'}}>CSS dinâmico</h2>
      {/* 5 - classe dinâmicas  */}
      <h2 className={redTitle ? 'red-title' : {color: 'red'}}>Este título vai ter um classe</h2>
    </>
  )
}

export default App
