import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg'

// 3 - useState
import { Data } from './components/Data'

// 4 - rederizão de lista
import ListRender from './components/ListRender'

// 7 - render condicional 
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props
import CarDetails from './components/CarDetails'

// 11 - renderização de listas componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 5000 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
]

// 12 - fragments
import Fragment from './components/Fragment'

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
      {/* 7 - render condicional  */}
      <ConditionalRender></ConditionalRender>
      {/* 8 - props */}
      <ShowUserName name='Elson' age={22}></ShowUserName>
      {/* 9 - desestruturando props */}
      <CarDetails brand={'BMW'} km={100} color={'Vermelho'}></CarDetails>
      {/* 10 - reaproveitamento de componentes*/}
      <CarDetails brand={'Fiat'} km={999} color={'Verde'}></CarDetails>
      <CarDetails brand={'Tesla'} km={250} color={'Preto'}></CarDetails>
      {/* 11 - renderização de listas com componetes  */}
      <hr/>
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}></CarDetails>
      ))}
      {/* 12 - fragments */}
      <Fragment></Fragment>
    </>
  )
}

export default App