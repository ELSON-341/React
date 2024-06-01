import { useState, useEffect } from "react";

// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - refatorando o POST
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(null)

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
            const res = await fetch(url)
            const json = await res.json()

            setData(json)
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
    return { data, httpConfig } 
}