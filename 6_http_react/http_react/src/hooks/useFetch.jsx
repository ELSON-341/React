import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

    // 6 - loading
    const [loading, setLoding] = useState(false)

    // 7 - tratando erros
    const [error, setError] = useState(null)

    const httpConfig = (data, method) => {
        if(method === 'POST') {
            setConfig({
                method,
                headers: {
                    "content-type": "application"
                },
                body: JSON.stringify(data)
            })
            setMethod(method)
        }
    }

    useEffect(() => {
        const fetchData = async () => {
           // 7 - tratando erros
            try {
            // 6 - loading
            setLoding(true)

            const res = await fetch(url)
            const json = await res.json()

            setData(json)
           } catch (error) {
            console.log(error.message)
            
            setError("Houve algum ao carregar os dados!")
           }
           setLoding(false)
        }
        fetchData()
    }, [url, callFetch])


    // 5 - refatorando o POST
    useEffect(() => {
         
        const httpRequest = async () => {
            let json
            if(method === 'POST') {
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                json = await res.json()
            }
            setCallFetch(json)
        }

        httpRequest()
    }, [config, method, url])
    return { data, httpConfig, loading, error } 
}