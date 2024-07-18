import { useContext } from "react"
import { SomeContext } from "../components/HookUseContext"

import HooksUseReducer from "../components/HooksUseReducer"
import HooksUseState from "../components/HooksUseState"
import HookUseEffect from "../components/HookUseEffect"
import HookUseRef from "../components/HookUseRef"
import HooksCallback from "../components/HooksCallback"
import HookMemo from "../components/HookMemo"




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
      <HookUseRef/>
      <HooksCallback/>
      <HookMemo/>
    </div>
  )
}

export default Home