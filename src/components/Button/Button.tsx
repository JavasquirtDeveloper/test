import React from 'react'

type Props = {
  className?: string
  text: string
}

const Button:React.FC<Props> = ({ className, text }) => {
  return (
    <div  className={className ? className : "button__wrapper"} >
      <p  className="button__text">{text}</p>
    </div>
  )
}

export default Button