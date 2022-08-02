import React from 'react'
import './TopBar.css'
// import {Person,Mail} from 'material-ui/icons'

const TopBar = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={'topbar ' +(menuOpen && "active")}>

   
    <div className='top'>
    <div className='left-wrapper'> 
    <a href= '#intro' className='logo'>Diana</a>
    </div>

    <div className='items'>
      {/* <Person/> */}
      <span>67890-98765</span>
      </div>

    <div className='center '>
    {/* <Mail/> */}
      <span>deedumvu.@gmail.com</span>
    </div>
    <div className='right'>
      <div className='burgermenu' onClick={()=>setMenuOpen(!menuOpen)}>
        <span className='line1'></span>
        <span className='line2'></span>
        <span className='line3'></span>
      </div>
    </div>

   </div>
   </div>
  )
}

export default TopBar
