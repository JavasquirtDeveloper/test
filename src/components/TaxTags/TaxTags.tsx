import React, { useState } from 'react';

const TaxTags = () => {
  const [click, setlick] = useState<any>(false)

  return (
    <div className="tax__tags">
      <div className="tax__tags__question">
        <p>Что уменьшаем?</p>
      </div>
      <div className="tax__tags__tag__container">
        <div className={!click ? "tax__tags__tag__active" : "tax__tags__tag"}>
          <p onClick={() => { setlick(false) }}>Срок</p>
        </div>
        <div className={click ? "tax__tags__tag__active" : "tax__tags__tag"}>
          <p onClick={() => { setlick(true) }}>Платёж</p>
        </div>
      </div>
    </div >
  )
}

export default TaxTags