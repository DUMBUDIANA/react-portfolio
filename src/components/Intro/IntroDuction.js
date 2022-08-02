import React from 'react'
import './IntroDuction.css'
import { init } from 'ityped'
import { useEffect ,useRef } from 'react'

const IntroDuction = () => {
    const textRef = useRef();

    useEffect(()=>{
    init(textRef.current , {
        showCursor:false,
        backDelay:1500,
        backSpeed: 60,
        strings: ["Developer", "Designer","Content Creator"],
    })
    },[])
  return (
    <div className='intro '>
        <div className='r '>

        
    
   
    <div className='details'>
        <div className='wrapper'>
            <h1>Hi There, </h1>
            <h1>I'm Diana Dumbu</h1>
            <div className='i-title'>
                <div className='i-title-wrapper'>
                <p className='item'>Freelance</p>
                <p className='item'>FullStack</p>
                <p className='item'>Wordpress</p>
                </div>

            </div>
        </div>
        <a href='#Port'>
            <img src='assets/images.png' className='arrow' alt=''/>
        </a>

        {/* download cv */}
    </div>
    <div className='left'>
        <div className='img-container '>
            <img src='assets/edited-01466(1).JPG' alt='' className='image'></img>
            
        </div>
    </div>

    </div>
    </div>
  )
}

export default IntroDuction