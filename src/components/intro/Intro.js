import React from 'react';

import './Intro.css';
import Me from '../../img/Peter.jpg';

const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro_left">
          <div className="intro_left-wrapper">
              <h2 className='intro_left-title'>Hello,My name is</h2>
              <h1 className='c' style={{color:'#000'}}>Akobe Peter</h1>
               <div className="intro_title">
                   <div className="intro_title-wrapper">
                       <div className="intro_title-item">Web Developer</div>
                       <div className="intro_title-item">Frontend Developer</div>
                       <div className="intro_title-item">Designer</div>
                       <div className="intro_title-item">Writer</div>
                       <div className="intro_title-item">Reader</div>
                   </div>
               </div>
               <p className='intro-desc'>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id aspernatur autem obcaecati rem soluta ipsam vel mollitia at, cum magnam?
               </p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className='intro_scroll'><path d="M48 32C21.5 32 0 53.5 0 80v64C0 152.9 7.125 160 16 160H96V80C96 53.5 74.5 32 48 32zM256 380.6V320h224V128c0-53-43-96-96-96H111.6C121.8 45.38 128 61.88 128 80V384c0 38.88 34.62 69.63 74.75 63.13C234.3 442 256 412.5 256 380.6zM288 352v32c0 52.88-43 96-96 96h272c61.88 0 112-50.13 112-112c0-8.875-7.125-16-16-16H288z"/></svg>
      </div>
      <div className="intro_right">
          <div className='intro_bg'></div>
          <img src={Me} alt="" className='intro_right-image' />
      </div>
    </div>
  )
}

export default Intro
