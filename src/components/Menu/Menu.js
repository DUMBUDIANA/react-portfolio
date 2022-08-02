import React from 'react'
import './Menu.css'

const Menu = ({menuOpen,setMenuOpen}) => {
  return (
<div className= {'menu' +(menuOpen && 'active')}>
    <ul>
        <li>
            <a href='#intro'>Home </a>
        </li>
        <li>
            <a href='#port'>Portfolio</a>
        </li>
        <li>
            <a href='#WorKs'>Works</a>
        </li>
        <li>
            <a href='#TestimoniaLs'>Testimonials</a>
        </li>
        <li>
            <a href='#ContaCt'>Contact</a>
        </li>
    </ul>

</div>
  )
}

export default Menu