// 1 - criar context
import { createContext, useState } from "react";

export const CounterContext = createContext()

// 2 - criar provaider
export const CounterContextProvider = ({childred}) => {
    const [counter, setCounter] = useState(5)

    return (
        <CounterContext.Provider value={{counter, setCounter}}>
            {childred}
        </CounterContext.Provider>
    )
}