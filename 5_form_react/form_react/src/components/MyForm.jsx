import './MyForm.css'
import { useState } from 'react'

export const MyForm = () => {
    // 3 - gerancimento de dados
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name, email)
;

    return (
    <div>
        {/* 1 - criação de form */}
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder='Digite sue name' onChange={handleName}/>
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* 4 - simplificando manipulação */}
                <input type="text" name="email" id="email" placeholder='Digite seu e-mail' onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
