import React from 'react'
import './Intouch.css'

const Intouch = () => {
  return (
    <div className='section'>
      <div className='line'></div>
        <div className='container contact-section'>

<div className='col-md-6 col-sm-12 left'>
<div> <h1 className=''>Let's discuss your project</h1></div>
    <div className='flex'><span class="material-icons">phone</span>  <p>+263 777 512 934 </p> </div>
    <div className='flex'><span class="material-icons">mail</span> <p className='mail'>deedumbu@gmail.com</p> </div>
    <div className='flex'><span class="material-icons">home</span>
                <p className='last'>  
                1234 Kuwadzana phase 3,Dzivaresekwa Harare Zimbabwe</p>
            
                <br></br> 
                </div>
    </div>

   
               
               
             


            <div className='col-md-6 col-sm-12 right'>
      
            <form 
            // onSubmit={sendEmail}
            >
                <input type="text" placeholder='Name' name='name' className='form-control'/>
                <br></br>
                <input type="text" placeholder='Subject' name='user_subject' className='form-control'/>
                <br></br>
                <input type="text" placeholder='Email' name='user_email' className='form-control'/>
                <br></br>
                <textarea rows="5" className='form-control' name='message'/>
                <input type='submit' value='send' className='form-control button'/>
            </form>
            </div>

        </div>
    </div>
  )
}

export default Intouch