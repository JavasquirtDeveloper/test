import React, { useState } from 'react';
import TaxPayment from '../TaxPayment/TaxPayment';
import TaxCalculationInput from './TaxCalculationInput/TaxCalculationInput';

const TaxCalculation = () => {
  const [click, setClick] = useState<boolean>(false);
  const [result, setResult] = useState<any>(0)

  const start = (value: number) => {
    if(value !== null){
      setResult((value * 12) * 0.13)
    }
  }

  return (
    <div className="TaxCalculation">
      <div className="TaxCalculation__header">
        <p>Ваша зарплата в месяц</p>
      </div>
        <TaxCalculationInput start={start} setClick={()=>{setClick(true)}} />
      {click && <TaxPayment result1={result} />}
    </div >
  )
}

export default TaxCalculation