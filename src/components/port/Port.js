import React from 'react'
import PortfolioList from '../Portfolio-List/PortfolioList'
import './Port.css'
import {  useState } from 'react'

const Port = () => {
    const [selected, setSelected ] = useState("featured")
   const list = [
       {
           id: "featured",
           title: "Featured",
       }, 
       {
           id: "web",
           title: "Web App",
       },

       {
           id: "mobile",
           title: "Mobile App",
        
        
        
        },

        {
         id: "html"  ,
         title: "HTML and CSS" ,
        },

        {
            id: "word",
            title: "Wordpress"
        }






   ]





  return (
    <div className='portfolio' id='portfolio'>
        <h1>My Portfolio</h1>
        <ul>
         {list.map(item=>(
             <PortfolioList title = {item.title } active={selected === item.id} setSelected={setSelected}
             id={item.id} 
             
             
             
             />
         ))}
        </ul>
        <div className='container'>
            <div className='item'>
                <img className='pic'
                src='assets/images (1).jpeg'
                alt=''
                
                />
                <h3>Banking App</h3>
            </div>
            <div className='item'>
                <img className='pic'
                src='assets/images (1).jpeg'
                alt=''
                
                />
                <h3>Banking App</h3>
            </div>
            <div className='item'>
                <img className='pic'
                src='assets/images (1).jpeg'
                alt=''
                
                />
                <h3>Banking App</h3>
            </div>
            <div className='item'>
                <img className='pic'
                src='assets/images (1).jpeg'
                alt=''
                
                />
                <h3>Banking App</h3>
            </div>
            <div className='item'>
                <img className='pic'
                src='assets/images (1).jpeg'
                alt=''
                
                />
                <h3>Banking App</h3>
            </div>
            <div className='item'>
                <img className='pic'
                src='assets/images (1).jpeg'
                alt=''
                
                />
                <h3>Banking App</h3>
            </div>
        </div>

    </div>
  )
}

export default Port