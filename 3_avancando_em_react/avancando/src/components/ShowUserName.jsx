
const ShowUserName = (props) => {
  return (
    <div>
        {/* 8 - props */}
        <h2>Seu nome é {props.name} e você tem {props.age}</h2>
    </div>
  )
}

export default ShowUserName