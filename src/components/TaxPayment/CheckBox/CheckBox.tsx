import React from 'react';

type Props = {
  result: number
  text: string
}

const CheckBox: React.FC<Props> = ({ result, text }) => {

  return (
    <label className="tax__payment__checboxs__item">
      <input type="checkbox" className="checbox__input"></input>
      <span className="check__box"></span>
      <p>{Math.ceil(result)}</p>
      <span>в {text} год</span>
    </label>
  )
}

export default CheckBox