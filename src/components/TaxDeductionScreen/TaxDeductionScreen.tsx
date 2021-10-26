import Button from '../Button/Button';
import TaxCalculation from '../TaxCalculation/TaxCalculation';
import TaxHeader from '../TaxHeader/TaxHeader';
import TaxTags from '../TaxTags/TaxTags';


const TaxDeductionScreen = () => {
  return (
    <div className="tax">
      <TaxHeader />
      <TaxCalculation />
      <TaxTags />
      <Button className={"button__wrapper__Tax"} text="Добавить" />
    </div>
  )
}

export default TaxDeductionScreen