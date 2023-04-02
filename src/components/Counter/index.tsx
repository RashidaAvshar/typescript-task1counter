import React, {useState} from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h1>counter</h1>
      <button onClick={()=>{
        setCounter(counter + 1)
      }}>+</button>
      {counter}
      <button onClick={()=>{
        if(counter!=0){
          setCounter(counter-1)
        }else{
          alert("menfi olmaz")
        }
      }}>-</button>
    </div>
  )
}

export default Counter
