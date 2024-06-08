import {useRouteError} from "react-router-dom"

const ErrorPage = () => {
  
    const error = useRouteError()
    
    console.log(error)
    
    return (
    <div>
        <h1>Ops!</h1>
        <p>Temos um problema</p>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
        <p>{error.data}</p>
    </div>
  )
}

export default ErrorPage