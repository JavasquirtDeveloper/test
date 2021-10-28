import React from 'react';
import CheckBox from './CheckBox/CheckBox';

type Props = {
  result1: number
}

const TaxPayment: React.FC<Props> = ({ result1 }) => {
  const result = {
    num2: 0,
    num3: 0,
    num4: 0,
  }

  const obNumb = 260000

  if (result1 >= obNumb) {
    result1 = 260000
    result.num2 = 0
    result.num3 = 0
    result.num4 = 0
  }

  if ((obNumb - result1) > result1) {
    result.num2 = result1
  } else { result.num2 = obNumb - result1 }
  if ((obNumb - result1 - result.num2) > result1) {
    result.num3 = result1
  } else {
    result.num3 = obNumb - result1 - result.num2
  }
  if ((obNumb - result1 - result.num2 - result.num3) > result1) {
    result.num4 = result1
  } else {
    result.num4 =obNumb - result1 - result.num2 - result.num3
  }

  return (
    <div className="TaxPayment">
      <div className="TaxPayment__header">
        <h4>Итого можете внести в качестве досрочных:</h4>
      </div>
      <div className="TaxPayment__checboxs">
        <CheckBox result={result1} text='1-ый' />
        <CheckBox result={result.num2} text='2-ой' />
        <CheckBox result={result.num3} text='3-ий' />
        <CheckBox result={result.num4} text='4-ый' />
      </div>
    </div>
  )
}

export default TaxPayment