import { useLayoutEffect, useEffect, useState } from "react";

const HookLaytout = () => {
    const [name, setName ] = useState('Algum nome')

    useEffect(() => {
        console.log('2');
        setName('Mudou de novo')
    }, [])

    useEffect(() => {
        console.log('3');
        setName('Mudou de novo 3!')
    }, [])

    useLayoutEffect(() => {
        console.log('1');
        setName('Outro nome')
    }, [])

    console.log(name);
  
    return (
    <div>
        <h2>UseLayoutEffect</h2>
        <p>Name: {name}</p>
        <hr />
    </div>
  )
}

export default HookLaytout