import React from 'react'

export default function Navbar() {
  function handleToggle() {
    console.log('toggle')
  }
  return (
    <>
      <nav className='navbar container'>
        <div className='logo-container'>
          <img src='./react-icon-small.png' className='logo-image'/>
        </div>
        <div className='toggler'>
          <p className='toggler--light'>light</p>
          <div className='toggler--slider'
            onClick={handleToggle}>
            <div className='toggler--slider-circle'></div>
          </div>
          <p className='toggler--dark'>dark</p>
        </div>
      </nav>
    </>
  )
}
