import { useReducer } from "react"

const HooksUseReducer = () => {
    // 1 - começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {

        return Math.floor(Math.random(state) * 100)
    })

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button type="button" onClick={dispatch}>Alúterar número</button>
    </div>
  )
}

export default HooksUseReducer