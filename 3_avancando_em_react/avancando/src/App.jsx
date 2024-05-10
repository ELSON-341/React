import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg'

// 3 - useState
import { Data } from './components/Data'

// 4 - rederizão de lista
import ListRender from './components/ListRender'
function App() {

  return (
    <>
      <h1>Avançãodo no React</h1>
      {/* 1 - imagem em React */}
      <img src="/img.jpg" alt="Alguma imagem" />

      {/* 2 - imagem em assets */}
      <img src={night} alt="Alguma imagem" />

      {/* 3 - useState */}
      <Data></Data>
      {/* 4 - rederizão de lista */}
      <ListRender></ListRender>
    </>
  )
}

export default App