
const ConditionalRender = () => {
    const x = false
    
    const name = 'Elson'
  return (
    <div>
        {/* 7 - render condicional */}
        <h3>Isso será exibido</h3>
        {x && <p>Se x for true sim!</p>}
        {/* 8 - else */}
        <h3>Render tarnário</h3>
        {name === 'João' ? (
            <div>
                <p>Olá {name}!</p>
            </div>
        ) : (
            <div>
                <p>Olá {name}!</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender