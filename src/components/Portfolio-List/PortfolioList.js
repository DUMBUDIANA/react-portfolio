import React from 'react'
import './Portfolio.css'

const PortfolioList = ({id, title,active,setSelected}) => {
  return (
 
    <li className={active ? "PortfolioList active " : "PortfolioList"} onClick={()=>setSelected(id)} ></li>
  )
}

export default PortfolioList