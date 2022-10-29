import React from 'react';
import './Card.css';
import defaultImage from '../../assets/images/default.png';
import PLAY from '../../assets/images/play-card.svg';
import STAR from '../../assets/images/star.svg';


const Card = ({ title, image, rating, year }) => {
  return (
          <div className="card_cont">
            <div className="card">
              <div className="filter"></div>
              <img className='card_image' src={image || defaultImage } alt="imagen no encontrada"/>
              <div className="description">
                  <div className="card_play_container">     
                        <img className='card_play' src={PLAY} alt="reproducir"/>
                      <h5 className='card_title'>{title}</h5>
                  </div>
                  <div className="rating_container">
                    <div className="rating_left">
                      <img src={STAR} alt="reproducir"/>
                      <p>{rating}</p>
                    </div>
                      <div className="year">
                        <p>{year.substring(0, 4)}</p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      )
    }   

export default Card;

