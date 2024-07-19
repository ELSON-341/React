import { useRef } from "react"
import SomeCompolent from "./SomeCompolent"

const HookUseImperativeHandle = () => {
    const componentsRef = useRef()

  return (
    <div>
        <h2>HookUseImperativeHandle</h2>
        <SomeCompolent ref={componentsRef}/>
        <button onClick={() => componentsRef.current.validate()}>Validate</button>
    </div>
  )
}

export default HookUseImperativeHandle