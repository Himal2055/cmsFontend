import React, { useState } from 'react'

const Test = () => {
    // var count = 0

    const [count,setCount] = useState(0)
    // const increaseCount =()=>{
    //     count = count + 1
    // }

    function increaseCount (){
        setCount(count+ 1)
        // count = count +1
        console.log(count)
    }
    function decreaseCount (){
        setCount(count- 1)
        // count = count - 1
        console.log(count)
    }


  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default Test
