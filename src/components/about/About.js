import React from 'react';

import aboutImg from '../../img/about.jpg';

import './About.css';

const About = () => {
  return (
    <div className='about'> 
     <div className='about_left'>
         <div className='about_left-card bg'></div>
         <div className='about_left-card'>
             <img src={aboutImg} alt="" className='about_left-card-img'/>
         </div>
     </div>
     <div className='about_right'>
     <h1 className='about_right-title'>About Me</h1>
     <p className='about_right-sub'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae fuga consequatur molestias aut atque quos culpa nisi quod temporibus totam?
     </p>
     <p className='about_right-desc'>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates excepturi veritatis ipsam debitis fugit odit maiores hic tempora! Iste ut nemo consectetur earum adipisci esse, veritatis, laborum non, voluptatem facilis harum nam inventore aspernatur nisi eius ratione est reiciendis! Iusto, ducimus dolorem!
     </p>
      <div className='about_award'>
         <img src={require("../../img/awards.jpg")} alt="" className='about_award-img' />
         <div className="about_award-texts">
             <h4 className='about_award_title'>International Design Day</h4>
             <p className='about_award-desc'>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis temporibus optio.
             </p>
         </div>
      </div>

    
    </div> 
    </div>
  )
}

export default About
