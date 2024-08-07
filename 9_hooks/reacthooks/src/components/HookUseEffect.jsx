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

    // 3 - array de dependecias com valores
    const [anotherNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        console.log('Sou excutado apenas quando mada o anotherNumber')
    }, [anotherNumber])

    useEffect(() => {
        const time = setTimeout(() => {
            console.log('Hello world');
            setNumber(anotherNumber + 1)
        }, 2000)
    }, [anotherNumber])

    // 4 - clearnup do useEffect
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         console.log('Hello word');
    //         setAnotherNumber(anotherNumber + 1)
    //     }, 2000)
    //     return () => {
    //         clearTimeout(timer)
    //         console.log('Executol up');
    //     }
    // }, [anotherNumber])
    
  return (
    <div>
        <h2>UseEffect</h2>
        <p>Number: {number}</p>
        <button type="button" onClick={changeSomething}>executar</button>
        <button type="button" onClick={()=> setAnotherNumber(anotherNumber + 1)}>Mudar anptherNumber</button>
    </div>
  )
}

export default HookUseEffect