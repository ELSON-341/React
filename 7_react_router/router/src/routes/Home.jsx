// 6 - carregamento de dados
import {useFecth} from "../hooks/useFetch"

const url = "http://localhost:3000products"

const Home = () => {
  const {data: iten} = useFecth(url)
  
  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home