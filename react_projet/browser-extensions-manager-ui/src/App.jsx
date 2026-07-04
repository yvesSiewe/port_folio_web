import Extension  from './composants/titlebar/extensions.jsx';
import  ExtensionList  from './composants/extension_list.jsx';
import { useState } from 'react';
import './App.css'
import React from 'react';

function App() {
  const [mode, setMode] = useState(false);
  const lightMode = 'linear-gradient(180deg, #EBF2FC 0%, #EEF8F9 100%)';
  const DarkMode = 'linear-gradient(180deg, #040918 0%, #091540 100%)';

  function changeMode(){
    setMode(!mode);
  }

  return (
    <div className='myApp' style={{background: mode ? lightMode : DarkMode}}>
      <Extension  
        mode={mode}
        handleMode={changeMode}
      />
      <section>
        <ExtensionList/>
      </section>
    </div>
  )
}

export default App
