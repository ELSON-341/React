import { useState } from "react";

const HooksUseState = () => {
    // 1 - useState
    let userName = 'João'
    const [name, setName] = useState('Elson')

    const changeNames = () => {
        userName ='João silva'

        setName('Elosn Santos')
    }

    // 2 - useState e input
    const [age, setAge] = useState(22)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(age);
    }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button type="button" onClick={changeNames}>Mudar nomes</button>
        {/* 2 - useState e input */}
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
            <input type="submit" value="Enviar" />
        </form>
        <p>Você tem {age} anos.</p>
        <hr />
    </div>
  )
}

export default HooksUseState