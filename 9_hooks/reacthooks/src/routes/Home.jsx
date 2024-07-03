// import { useContext } from "react"
// import {CounterContext} from "../context/CounterContext.jsx"

//  3 - alterando valor do contexto
import ChangeCounter from "../components/ChangeCounter.jsx"

// 4 - Refatorando contexto com hook
import { useCounterContext } from "../hooks/useCounterContext.jsx"

// 5 - contexto mais complexo
import {useTitleColorContext} from "../hooks/useTitleColorContext.jsx"

const Home = () => {
  // const {counter} = useContext(CounterContext)
  const {counter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()

  console.log(color);

  const setTitle = (color) => {
    dispatch({type: color})
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter/>
      {/* 6 - alterndo context complexo */}
      <div>
        <button type="button" onClick={() => setTitle("RED")}>vermelho</button>
        <button type="button" onClick={() => setTitle("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home