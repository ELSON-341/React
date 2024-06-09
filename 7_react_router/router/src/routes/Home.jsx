// 6 - carregamento de dados
import {useFetch} from "../hooks/useFetch"

const url = "http://localhost:3000/products"

// 7 - rotas dinâmica

const Home = () => {
  const {data: items} = useFetch(url)
  
  return (
    <div>
      <h1>Home</h1>
      {/* 6 - carregamento de dados */}
      {items && items.map((item) => (
        <ul className="products" key={item.id}>
        <li>
          <h2>{item.name}</h2>
          <p>R$: {item.price}</p>
        </li>
      </ul>
      ))}
    </div>
  )
}

export default Home