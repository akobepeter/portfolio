import React, {useContext, useRef,useState } from 'react';
import { ThemeContext } from '../../Context';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
   const theme = useContext(ThemeContext);
   const darkMode = theme.state.darkMode;
    const formRef = useRef();
    const [done,setDone] = useState(false);

    const handleSubmit = (e) =>{
      e.preventDefault();

      emailjs.sendForm('service_digkjeg', 'template_hpzbkyj', formRef.current, 'DbJLQB3r_pyPaGojB')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className='contact'>
      <div className="contact_bg"></div>
      <div className='contact_wrapper'>
         <div className='contact_left'>
             <h1 className='contact_left-title'>Let's discuss your project</h1>
             <div className='contact_left-info'>
                 <div className='contact_left-item'>
                    <img src={require('../../img/phone.png')} alt="" className='contact_left-icon' /> +234 091 2345 671
                 </div>
                 <div className='contact_left-item'>
                    <img src={require('../../img/email.jpg')} alt="" className='contact_left-icon' /> contact@peter.com
                 </div>
                 <div className='contact_left-item'>
                    <img src={require('../../img/address.png')} alt="" className='contact_left-icon' /> Rock Haven Layout Jos 
                 </div> 
             </div>
         </div>
         <div className='contact_right'>
             <p className='contact_right-desc'>
                <b>What's your story</b> Get in touch. Always freelancing if the right project comes along me.
             </p>
             <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{background:darkMode && '#333'}} type="text" name="user_name" id=""placeholder='Name' />
                <input style={{background:darkMode && '#333'}} type="text" name="user_subject" id=""placeholder='Subject' />
                <input style={{background:darkMode && '#333'}} type="email" name="user_email" id=""placeholder='Email' />
                <textarea style={{background:darkMode && '#333'}} name="message"   rows="5" placeholder='Message'/>
                <button>Submit</button>
                {done && "Thank you"}
             </form>
         </div>
      </div>
    </div>
  )
}

export default Contact
