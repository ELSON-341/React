import { useState } from "react"
import { usePrevious } from "../hooks/usePrevious"

const HookCustom = () => {
    const [number, setNumber] = useState()
    const previousValue = usePrevious(number)

  return (
    <div>
        <h2>HookCustom</h2>
        <p>Atual: {number}</p>
        <p>Anterior: {previousValue}</p>
        <button onClick={() => setNumber(Math.floor(Math.random() * 100))}>Auterar</button>
    </div>
  )
}

export default HookCustom