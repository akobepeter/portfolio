 import React, { useContext } from 'react';
 import { ThemeContext } from '../../Context';
import './Toggle.css';

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const handleClick = () =>{
    theme.dispatch({type:'TOGGLE'});
  }
  return (
    <div className='toggle'>
      <img src={require('../../img/sun.png')} alt=""  className='toggle-icon'/>
      <img src={require('../../img/mon.jpg')} alt="" className='toggle-icon' />
      <div className='toggle-button' onClick={handleClick} style={{left:theme.state.darkMode ? 0:25}}></div>
    </div>
  )
}

export default Toggle
