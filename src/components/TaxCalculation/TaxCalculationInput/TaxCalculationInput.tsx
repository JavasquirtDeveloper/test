
import { Formik, Form, Field, ErrorMessage } from 'formik';

type Props = {
  start: (arg: number) => void
  setClick: (arg: boolean) => void
}

const TaxCalculationInput: React.FC<Props> = ({ start, setClick }) => {
  return (
    <div className="tax__calculation__input">
      <Formik
        initialValues={{ money: '' }}
        validate={values => {
          type error = {
            money?: string
          }
          const errors: error = {};
          if (!values.money) {
            errors.money = 'Поле обязателно для заполнения';
          } else if (Number(values.money) < 0) {
            errors.money = 'Значение не может быть меньше 0'
          }
          return errors;
        }}
        onSubmit={(values) => {
          setClick(true)
          start(Number(values.money))
          console.log('1');
          
        }}>
        <Form className="input__wrapper">
          <Field className="input" type="number" name="money" />
          <ErrorMessage name="money" component="p" className="input__erorr" />
          <div>
            <button className="tax__calculation__button" type="submit">
              Рассчитать
            </button>
          </div>
        </Form>
      </Formik>
    </div >
  )
}

export default TaxCalculationInput;