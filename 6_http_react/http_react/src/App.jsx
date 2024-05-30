import { useState, useEffect } from 'react'

const url = "http://localhost:3000/products"

import './App.css'

function App() {
  // 1 - resgatando dados
  const [products, setProducts] = useState([])
  
  useEffect(() => {

    async function getData() {
      const res = await fetch(url)

      const data = await res.json()

      setProducts(data)
    }

    getData()
  }, [])

  // 2 - envio de dados
  

  return (
    <>
      <h1>HTTP em React</h1>
      {/* 1 - resgate de dados */}
      {products.map(product => (
        <ul key={product.id}>
          <li>{product.name} - R$ {product.price}</li>
        </ul>
      ))}
    </>
  )
}

export default App
