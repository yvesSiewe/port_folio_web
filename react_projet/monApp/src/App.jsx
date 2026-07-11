import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>Hello les gens</header>
      <main>
        <p>Les gars github est free je vous assure cela permet de versionner le code est c'est cool cela.</p>
      </main>
    </>
  )
}

export default App
