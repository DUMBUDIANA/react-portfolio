


import React from 'react'
import './Services.css'
// import DoneIcon from "@material-ui/icons/Done"

const Services = () => {
  return (
    <div>
        <h1 className='text-center serviceh'>My experience</h1>
         <div className='container'>
        <div className='front col-md-6 col-sm-12'>
            <p className='heading'>Frontend Development</p>
         <ul>
             <li><span class="material-icons">done</span>HTML and CSS </li>
             <li><span class="material-icons">done</span>React</li>
             <li><span class="material-icons">done</span>Wordpress and Divi</li>
             <li><span class="material-icons">done</span>Javascript</li>
         </ul>
        </div>
        <div className='back col-md-6 col-sm-12'>
          <p className='heading2'>Backend Development</p>
        <ul>
        <li><span class="material-icons">done</span>Node.js</li>
             <li><span class="material-icons">done</span>Python</li>
             <li><span class="material-icons">done</span>Cloud Computing</li>
             <li><span class="material-icons">done</span>Machine learning</li>
        </ul>
        </div>
        </div>
        
</div>
  )
}

export default Services