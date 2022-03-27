import React from 'react'
import { useState } from 'react/cjs/react.production.min';



const Form=()=> {

  const [potassium, setPotassium] = useState("")
  const [phosphorus, setPhosporus] = useState("")
  
  const handleSubmit=() =>{

  }


  return (
    <>
      <form action="" >
        <label htmlFor="potassium"></label>
        <input type="text" value={potassium} />
      </form>
    </>
  )
}


export default Form;