import {useState} from 'react'

export const Data = () => {
    let semoData = 10

    const [anotherNumber, setAnotherNumber] = useState(20)

    const [text, setNewText] = useState('Texto')

  return (
    <div>
        <div>
            <p>Valor: {semoData}</p>
            <button type="button" onClick={() => semoData = 15}>Mudar vriavel</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            <button type="button" onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar state</button>
        </div>
        <div>
            <p>Resultado: {text}</p>
            <button type="button" onClick={() => setNewText(['test 1', 'text 2', 'test 3'].join(', '))}>Mudar texto</button>
        </div>
    </div>
  )
}
