import React from 'react';
import './Banner.css';
import PLAY from '../../assets/images/play.svg';
import PLUS from '../../assets/images/plus.svg';

const Banner = ({featuredMovies}) => {
  return (
    <div>

      <div className='now_playing'>
              <h5> ORIGINAL DE <strong>LITEFLIX</strong></h5>
              <h1 >{featuredMovies.title}</h1>
              <div className='buttons'>
                  <button className='btn_1'>
                      <img className='play' src={PLAY} alt='reproducir' width='9px'/>
                      REPRODUCIR
                  </button>
                  <button className='btn_2'>
                      <img className='play' src={PLUS} alt='mi lista' width='14px'/>
                      MI LISTA
                  </button>
              </div>   
      </div> 
    </div>
  )
}

export default Banner;
