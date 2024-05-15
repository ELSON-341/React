
const SwitchMessage = ({ otherMessage }) => {
  const message = ['Hello', 'how are you', 'well!']

  return (
    <div>
        <button type="button" onClick={() => otherMessage(message[0])}>1</button>
        <button type="button" onClick={() => otherMessage(message[1])}>2</button>
        <button type="button" onClick={() => otherMessage(message[2])}>3</button>
    </div>
  )
}

export default SwitchMessage