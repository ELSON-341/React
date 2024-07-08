import { useEffect, useState } from "react"
const HookUseEffect = () => {
    // 1 - useEffect 
    useEffect(() => {
        console.log('Estou sendo executado');
    })

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(prevState => prevState + 1)
    }

    // 2 - arry de deps. vasio
    useEffect(() => {
        console.log('Serei executado apenas uma vez.');
    })
  return (
    <div>
        <h2>UseEffect</h2>
        <p>Number: {number}</p>
        <button type="button" onClick={changeSomething}>executar</button>
    </div>
  )
}

export default HookUseEffect