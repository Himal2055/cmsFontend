import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count,setCount] = useState(0)
    const [decreseCount,setDecreaseCount] = useState(0)

    function increaseCount (){

        setCount(count +1)
    }
    function handleDecrese(){

        setDecreaseCount(decreseCount - 1)
    }
 
    //koi manxey first time site ma aauda or first time mount huda 
    // useEffect(()=>{
    //     //backend bata kahi lerauni pathauni modify garney code yesma halxau if first mount ma garny vaney
    //     console.log("welcome to site")
    // },[])



    //  useEffect(()=>{
    //     //ahelae couunt ko katti xa value  tyo backend samma pugaedey
    //     if(count !== 0){
    //         document.title = count
    //         console.log("Count value changed")
    //     }
    //  },[count,handleDecrese])


    useEffect (()=>{
        console.log("bye world")
    })


  return (
    <div>
        <div>{count}</div>
        <button onClick={increaseCount}> +</button>

        <div>{decreseCount}</div>
        <button onClick={handleDecrese}> - </button>

    </div>
  )
}

export default UseEffect
