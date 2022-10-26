import React, { useState, useEffect }from 'react';
import './Uploads.css';
import PLAY from '../../assets/images/play-card.svg';


const Uploads = () => {

  const [name, setName] = useState('');
  const [image, setImage] = useState(null);

  const getName = () => {
    return localStorage.getItem('name')
  }

  const getImage = () => {
    return localStorage.getItem('image')
  }

  useEffect(() => {
    setName(getName())
  }, []);

  useEffect(() => {
    setImage(getImage())
  }, []);

  return (
    <div className="card_cont_up">
      <div className="card">
      <div className="filter"></div>
        <img className='card_image' src={image} alt="imagen no encontrada"/>
        <div className="description">
            <div className="card_play_up_cont">
              <img className='card_play_up' src={PLAY} alt="reproducir"/>
              <h5 className='card_title'>{name}</h5>
            </div>
        </div>
      </div>
  </div>

  )
}

export default Uploads