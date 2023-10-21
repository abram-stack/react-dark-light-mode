import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  function toggleDarkMode() {
    // console.log('toggle dark mode')
    setDarkMode( prevState => !prevState)
  }

  return (
    <>
      <Navbar darkMode={ darkMode} toggleDark={toggleDarkMode} />
      <Content darkMode={ darkMode} />
    </>
  );
}

export default App
