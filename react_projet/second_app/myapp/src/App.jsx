import { height } from "@mui/system"
import { use, useEffect, useState } from "react"


function App() {

  const [value, setValue] = useState(5)
  const [secondLeft, setSecondLeft] = useState(0)

  const handleChange = (v)=>{
    setValue(v)
    setSecondLeft( secondLeft + 1)
  }

  useEffect(()=>{
    
  }, [value])
  return(
    <>
      <input type="text" 
      value={value}
      onChange={(e)=> handleChange(e.target.value * 1)}
      />
      <p>Decompte: {secondLeft}</p>
    </>
  )
}

export default App
