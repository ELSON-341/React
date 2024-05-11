import { useState } from "react"

const ListRender = () => {
  const [list] = useState(['Elson', 'Pedro', 'Ana', 'Elson'])

  const [users, setUsers] = useState([
    {id: 1, name: 'Elson', age: 22},
    {id: 2, name: 'Pedro', age: 20},
    {id: 3, name: 'Ana', age: 31},
  ])

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4)

    setUsers((preUsers) => preUsers.filter((user) => randomNumber != user.id))
  }

  return (
    <div>
      {/* 4 - render sem key */}
        <ul>
          {list.map((item, i) => (
              <li key={i}>{item}</li>
          ))}
        </ul>
        {/* 5 - render com key */}
        <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/* 6 - previous state */}
        <button type="button" onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}

export default ListRender