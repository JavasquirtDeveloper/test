import React from 'react';
import CheckBox from './CheckBox/CheckBox';

type Props = {
  num1: number
}

const TaxPayment: React.FC<Props> = ({ num1 }) => {
  const result = {
    num2: 0,
    num3: 0,
    num4: 0,
  }

  const obNumb = 260000

  if (num1 >= obNumb) {
    num1 = 260000
    result.num2 = 0
    result.num3 = 0
    result.num4 = 0
  }

  if ((obNumb - num1) > num1) {
    result.num2 = Math.ceil(num1)
  } else { result.num2 = obNumb - num1 }
  if ((obNumb - num1 - result.num2) > num1) {
    result.num3 = Math.ceil(num1)
  } else {
    result.num3 = Math.ceil(obNumb - num1 - result.num2)
  }
  if ((obNumb - num1 - result.num2 - result.num3) > num1) {
    result.num4 = Math.ceil(num1)
  } else {
    result.num4 = Math.ceil(obNumb - num1 - result.num2 - result.num3)
  }

  return (
    <div className="TaxPayment">
      <div className="TaxPayment__header">
        <h4>Итого можете внести в качестве досрочных:</h4>
      </div>
      <div className="TaxPayment__checboxs">
        <CheckBox result={num1} text='1-ый' />
        <CheckBox result={result.num2} text='2-ой' />
        <CheckBox result={result.num3} text='3-ий' />
        <CheckBox result={result.num4} text='4-ый' />
      </div>
    </div>
  )
}

export default TaxPayment