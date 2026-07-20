import { useState } from 'react'
import { FormData } from './composants/form'
import { Result } from './composants/result'
import { MonthlyResult } from './composants/monthlyResult'

import './App.css'

function App() {
  const [count, setCount] = useState(false);
  const [datas, setDatas] = useState({
    mortageAmount: '',
    mortgage: '',
    interestRale: '',
    mortgageType: ''
  })

  return (
    <>
      <main>
        <div className='Container'>
          <FormData/>
          {!count ? <Result/> : <MonthlyResult/>}
        </div>
      </main>
    </>
  )
}

export default App
