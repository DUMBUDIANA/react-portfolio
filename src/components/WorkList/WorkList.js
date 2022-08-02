import React from 'react'
import WorKs from '../Works/WorKs'
import "./WorkList.css"
import { pro } from '../../data'


const WorkList = () => {
  return (
    <div>
 <h1 className='heading-work'>Recent Works</h1>
  
    <div className='list container'>
     
      {pro.map(item=>( 
        <WorKs className="project" img={item.img } key={item.id} link={item.link}/>
      ))} 
    </div>
    </div>
  )
}

export default WorkList