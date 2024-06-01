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
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const products = {
      name,
      price
    }
    const res = await fetch(url, {
      method:"POST",
      headers: {
        "content-Type": "application/json"
      },
      body: JSON.stringify(products)
    })

    // 3 - carregamento dinâmico de dados
    const addedProduct = await res.json()
    setProducts((prvProduct) => [...prvProduct, addedProduct])
  }

  return (
    <>
      <h1>HTTP em React</h1>
      {/* 1 - resgate de dados */}
      {products.map(product => (
        <ul key={product.id}>
          <li>{product.name} - R$ {product.price}</li>
        </ul>
      ))}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome:</span>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}/>
          </label>
          <label>
            <span>Preço:</span>
            <input type="text" onChange={(e) => setPrice(e.target.value)} value={price}/>
          </label>
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </>
  )
}

export default App
