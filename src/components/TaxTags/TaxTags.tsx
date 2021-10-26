import React, { useState } from 'react';

const TaxTags = () => {
  const [click, setlick] = useState<any>(false)


  return (
    <div className="TaxTags">
      <div className="TaxTags__question">
        <p>Что уменьшаем?</p>
      </div>
      <div className="TaxTags__tag__container">
      <div className={!click ? "TaxTags__tag__active" : "TaxTags__tag"}>
        <p onClick={()=>{setlick(false)}}>Срок</p>
        </div>
        <div className={click ? "TaxTags__tag__active" : "TaxTags__tag"}>
        <p onClick={()=>{setlick(true)}}>Платёж</p>
        </div>
      </div>
    </div >
  )
}

export default TaxTags