
import HooksUseReducer from "../components/HooksUseReducer"
import HooksUseState from "../components/HooksUseState"
import HookUseEffect from "../components/HookUseEffect"

import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"


const Home = () => {  
  const {contextValue} = useContext(SomeContext)

  return (
    <div>
      <h1>Home</h1>
      <HooksUseState/>
      <HooksUseReducer/>
      <HookUseEffect/>
      <h2>useContet</h2>
      <p>Valor do contexto: {contextValue}</p>
      <hr/>
    </div>
  )
}

export default Home