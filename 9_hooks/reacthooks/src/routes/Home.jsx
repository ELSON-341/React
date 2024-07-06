import HooksUseReducer from "../components/HooksUseReducer"
import HooksUseState from "../components/HooksUseState"


const Home = () => {  

  return (
    <div>
      <h1>Home</h1>
      <HooksUseState/>
      <HooksUseReducer/>
    </div>
  )
}

export default Home