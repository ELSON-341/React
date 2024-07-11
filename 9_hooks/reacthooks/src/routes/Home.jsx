
import HooksUseReducer from "../components/HooksUseReducer"
import HooksUseState from "../components/HooksUseState"
import HookUseEffect from "../components/HookUseEffect"


const Home = () => {  

  return (
    <div>
      <h1>Home</h1>
      <HooksUseState/>
      <HooksUseReducer/>
      <HookUseEffect/>
    </div>
  )
}

export default Home