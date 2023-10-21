import React from 'react'

export default function Navbar(props){
  

  let classDark = props.darkMode ? 'dark' : ''
  console.log(classDark)

  return (
    <>
      <nav className={`navbar container ${classDark}`}>
        <div className='logo-container'>
          <img src='./react-icon-small.png' className='logo-image'/>
        </div>
        <div className='toggler'>
          <p className='toggler--light'>light</p>
          <div className='toggler--slider'
            onClick={() => props.toggleDark()}>
            <div className='toggler--slider-circle'></div>
          </div>
          <p className='toggler--dark'>dark</p>
        </div>
      </nav>
    </>
  )
}
