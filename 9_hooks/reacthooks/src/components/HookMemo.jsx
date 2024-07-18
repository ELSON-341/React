import { useState, useEffect, useMemo } from "react"

const HookMemo = () => {
    const [number, setNumber] = useState(0)

    const preimumNumber = useMemo(() => {
        return ['0', '100', '200']
    }, [])

    useEffect(() => {
        console.log('Premium numbers foi alterado');
    }, [preimumNumber])

  return (
    <div>
        <h2>HookMemo</h2>
        <input type="text" onChange={(e) => setNumber(e.target.value)}/>
        {preimumNumber.includes(number) ? <p>Acertou o número</p> : ''}
    </div>
  )
}

export default HookMemo