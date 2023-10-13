import React from 'react'

const Button = (props) => {
  // const {title} =props
  const title = props.title 
  const color = props.color
  const subTitle = props.subTitle
 
  return (
    <div>
       <button style={{height:"50px",width:"100px",backgroundColor :" color"}}>{title}</button>
       <p>{subTitle}</p>

    </div>
  )
}

export default Button

