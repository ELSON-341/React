import './MyForm.css'
import { useState } from 'react'

export const MyForm = ({userName, userEmail}) => {
    // 3 - gerancimento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)

    const [bio, setBio] = useState('')

    const [role, setRole] = useState('')

    const handleName = (e) => {
        setName(e.target.value)
    }
    console.log(name, email)

    // 5 - envio de formulário
    const handleSumbit = (e) => {
        e.preventDefault()
        console.log(name)
        console.log(email)
        console.log(bio)
        console.log(role)

        // validação
        // envio

        setName('')
        setEmail('')
        setBio('')
        setRole('')
    }

    return (
    <div>
        {/* 1 - criação de form */}
        {/* 5 - envio de formulário */}
        <form onSubmit={handleSumbit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                type="text"
                name='name'
                placeholder='Digite sue name'
                onChange={handleName}
                // 6 - controlled input
                value={name || ''}
                />
            </div>
            {/* 2 - label envolvendo input */}
            <label>
                <span>E-mail</span>
                <input
                type="text"
                name="email"
                id="email"
                placeholder='Digite seu e-mail'
                // 4 - simplificando manipulação 
                onChange={(e) => setEmail(e.target.value)}
                // 6 - controlled input
                value={email || ''}/>
            </label>
            <label>
                <span>Bio:</span>
                <textarea name="bio" placeholder="Descri do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
            {/* 9 - select */}
            <label>
                <span>Função do sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
