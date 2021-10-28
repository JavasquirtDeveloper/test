import React from 'react';
import { HeaderProps } from '../TaxDeductionScreen/TaxDeductionScreen';

const TaxHeader: React.FC<HeaderProps> = ({ exit }) => {
  return (
    <div className="tax__header__wrapper">
      <div className="tax__header__header">
        <h4>Налоговый вычет</h4>
        <span onClick={exit} className="tax__header__exit"></span>
      </div>
      <div className="tax__header__text">
        <p>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно.Размер налогового вычета составляет не более 13% от своего  официального годового дохода.
        </p>
      </div>
    </div>
  )
}

export default TaxHeader