import { useReducer, useState } from "react"

const HooksUseReducer = () => {
    // 1 - começando com o useReducer
    const [number, dispatch] = useReducer((state, action) => {

        return Math.floor(Math.random(state) * 100)
    })

    // 2 - avasançãodo no useReducer
    const inititalTasks = [{
      id: 1, text: "Fazer alguma coisa",
      id: 2, text: "Fazer autra coisa"
    }]

    const taskTextReducer = (state, action) => {
      switch(action.type) {
        case 'ADD':
          const newTask = {
            id: Math.floor(Math.random() * 1000),
            text: taskText
          }
          setTaskText('')

          return[...state, newTask]

        case 'DELETE':
          return state.filter((task) => task.id !== action.payload)
        
        default:
          state
      }
    }
    
    const [taskText, setTaskText] = useState('')
    const [task, dispatctTask] = useReducer(taskTextReducer, inititalTasks)

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatctTask({type : 'ADD'})
    }

    const removeTask = (id) => {
      dispatctTask({type: 'DELETE', payload: id})
    }

  return (
    <div>
        <h2>useReducer</h2>
        <p>Número: {number}</p>
        <button type="button" onClick={dispatch}>Alúterar número</button>
        <h3>Tarefas</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTaskText(e.target.value)} value={taskText || ''}/>
          <input type="submit" value="Envior" />
        </form>
        {task.map(task => (
          <ul key={task.id}>
            <li onDoubleClick={() => removeTask(task.id)}>{task.text}</li>
          </ul>
        ))}
    </div>
  )
}

export default HooksUseReducer