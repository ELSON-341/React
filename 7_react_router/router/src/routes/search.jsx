import {useFetch} from "../hooks/useFetch"

import { Link, useSearchParams } from "react-router-dom"

const Search = () => {
  const [searchParams] = useSearchParams()

  console.log(searchParams);

    const url = "http://localhost:3000/products?" + searchParams;

    const {data: items} = useFetch(url)

  return (
    <div>
        <h1>Relsutados da pesquisa</h1>
        {items && items.map((item) => (
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

export default Search