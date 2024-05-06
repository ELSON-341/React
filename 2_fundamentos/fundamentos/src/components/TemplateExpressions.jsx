// 4 - template expression

const TemplateExpression = () => {
    const name = 'Elson'

    const data = {
        age: 22,
        job: 'programador'
    }


    return (
        <div>
            <p>A sama é {2 + 2}</p>
            <h3>Bem-vindo {name}</h3>
            <p>Sua idade é {data.age} anos e voê é um {data.job}</p>
        </div>
    )
}

export default TemplateExpression