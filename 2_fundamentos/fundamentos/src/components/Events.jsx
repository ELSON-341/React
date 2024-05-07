
const Events = () => {
    const handleClick = (e) => {
        console.log('Excutou');
        console.log(e)
    }

    // 8 - função de renderização
    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando isso!</h1>
        } else {
            return <h1>Rdederizado outra coisa!</h1>
        }
    }

    // return 10 > 2 && <p>Carregando...</p>

    return (
    <div>
        <div>
            <button onClick={() => console.log('Testando o evento')}>Cliqui aqui</button>
        </div>
        {/* 7 - evento com função */}
        <div>
            <button onClick={handleClick}>Cliqui aqui</button>
        </div>
        {/* 8 - Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events