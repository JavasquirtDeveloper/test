import { useState } from 'react';

import Button from './components/Button/Button';
import TaxDeductionScreen from './components/TaxDeductionScreen/TaxDeductionScreen';

import './App.css';

const App = () => {

  const [click, setClick] = useState<any>(false)

  return (
    <div className="App">
      <div onClick={setClick}>
        {!click && <Button text="Налоговый вычет" />}
      </div>
      {click && <TaxDeductionScreen />}
    </div>
  );
}

export default App;
