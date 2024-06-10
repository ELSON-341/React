import { useFetch } from "../hooks/useFetch"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const product = () => {
  const { id } = useParams()

  const url = "http://localhost:3000/products/" + id

  const {data: product } = useFetch(url)

  if(!product) return <p>carregando...</p>
  
    return (
    <div>
        <p>ID do produto: {id}</p>
        <div>
            <h1>{product.name}</h1>
            <p>R${product.price}</p>
            <Link to={`/products/${id}/info`}>Mais infomações</Link>
        </div>
    </div>
    )
}

export default product