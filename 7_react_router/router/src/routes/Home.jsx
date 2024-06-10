// 6 - carregamento de dados
import {useFetch} from "../hooks/useFetch"

const url = "http://localhost:3000/products"

// 7 - rotas dinâmica
import { Link } from "react-router-dom"

const Home = () => {
  const {data: items} = useFetch(url)
  
  if(!items) return <p>carregando...</p>
  return (
    <div>
      <h1>Home</h1>
      {/* 6 - carregamento de dados */}

      {items.map((item) => (
        <ul className="products" key={item.id}>
        <li>
          <h2>{item.name}</h2>
          <p>R$: {item.price}</p>
          {/* 7 - rotas dinâmica */}
          <Link to={`/products/${item.id}`}>Detalhes</Link>
        </li>
      </ul>
      ))}
    </div>
  )
}

export default Home