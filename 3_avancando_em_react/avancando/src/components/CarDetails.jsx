
const CarDetails = ({brand, km, color}) => {
  return (
    <div>
        <h2>Detalhe da carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Kilomentragem: {km}</li>
            <li>Cor: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails