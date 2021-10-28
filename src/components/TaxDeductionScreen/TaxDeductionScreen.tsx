import { FC } from 'react';
import Button from '../Button/Button';
import TaxCalculation from '../TaxCalculation/TaxCalculation';
import TaxHeader from '../TaxHeader/TaxHeader';
import TaxTags from '../TaxTags/TaxTags';

export type HeaderProps = {
  exit: () => void
}

const TaxDeductionScreen: FC<HeaderProps> = ({ exit }) => {
  return (
    <div className="tax">
      <TaxHeader exit={exit} />
      <TaxCalculation />
      <TaxTags />
      <Button className={"button__wrapper__tax"} text="Добавить" />
    </div>
  )
}

export default TaxDeductionScreen