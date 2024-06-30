import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Contact = () => {
  const {color} = useTitleColorContext()

  return (
    <div>
        <h1 style={{color: color}}>Páginas de contantos</h1>
    </div>
  )
}

export default Contact