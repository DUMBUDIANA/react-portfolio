import React from 'react'
import "./WorKs.css"

const WorKs = ({img,link}) => {
  return (
    <div className='p'>
      <div className='p-browser'>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
        <div className='p-circle'></div>
      </div>
     <a href='{link}' target="_blank" rel='noreferrer'>
       <img src='assets/Portfolio Web design _ Dark version (1).png' alt='' className='p-img'></img>
     </a>
     

    </div>
  )
}

export default WorKs