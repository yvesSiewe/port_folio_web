import { useState } from 'react'
import { Result } from './composants/result'
import { MonthlyResult } from './composants/monthlyResult'
import { Form } from './composants/form'

import './App.css'

function App() {
  
  const [isFull, setIsFull] = useState(false)  /* mon etat pour la verification de tout les champs */
  const [formData, setFormDat] = useState({
    amount: '',
    team: '',
    rate: '',
    type: ''
  })


  const handleSubmit = (e)=>{
    e.preventDefault();
    let number = 0
    console.log('hello les gars')
    console.log(formData)
    for(let key in formData){
      if(formData[key] === ''){
        console.log('ce champ est obligatoire')
        return
      }
      else{
        number += 1
      }
    }
    if(number == 4){
      setIsFull(true)
    }
  }

  

  return (
    <>
      <main>
        <div>
          <Form
            submit={handleSubmit}
            datas={formData}
            setDatas={setFormDat}
          />
          {isFull ? <Result/> : <MonthlyResult/>}
        </div>
      </main>
    </>
  )
}

export default App


