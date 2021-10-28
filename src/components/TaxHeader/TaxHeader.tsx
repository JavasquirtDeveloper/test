import React from 'react';
import { HeaderProps } from '../TaxDeductionScreen/TaxDeductionScreen';

const TaxHeader: React.FC<HeaderProps> = ({ exit }) => {
  return (
    <div className="TaxHeader__wrapper">
      <div className="TaxHeader__header">
        <h4>Налоговый вычет</h4>
        <span onClick={exit} className="TaxHeader__exit"></span>
      </div>
      <div className="TaxHeader__text">
        <p>
          Используйте налоговый вычет чтобы погасить ипотеку досрочно.Размер налогового вычета составляет не более 13% от своего  официального годового дохода.
        </p>
      </div>
    </div>
  )
}

export default TaxHeader