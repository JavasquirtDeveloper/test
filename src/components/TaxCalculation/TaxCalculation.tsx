import React, { useRef, useState } from 'react';
import TaxPayment from '../TaxPayment/TaxPayment';

const TaxCalculation = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [click, setClick] = useState<any>(false);
  const [result, setResult] = useState<any>(0)

  const start = () => {
    const value: number | null = Number(inputRef.current?.value)
    setResult((value * 12) * 0.13)
  }


  return (
    <div className="TaxCalculation">
      <div className="TaxCalculation__header">
        <p>Ваша зарплата в месяц</p>
      </div>
      <div className="TaxCalculation__input">
        <input ref={inputRef} className="input" type='number' placeholder="Введите данные"></input>
      </div>
      <div onClick={setClick} className="TaxCalculation__button">
        <p onClick={start}>Расчитать</p>
      </div>
      {click && <TaxPayment num1={result} />}

    </div >
  )
}

export default TaxCalculation