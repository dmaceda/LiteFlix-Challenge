import React, { useState } from 'react';
import './Cards.css';
import { useSelector } from 'react-redux';
import Uploads from '../uploads/Uploads';
import CHECK from '../../assets/images/check.svg';
import ARROW from '../../assets/images/arrow.svg';
import Card from '../card/Card';

const Cards = () => {
     
    const [list, setList] = useState(false);
    const [checkOne, setCheckOne] = useState(true);
    const [checkTwo, setCheckTwo] = useState(false);
    const imageUrl = 'https://image.tmdb.org/t/p/w500';
    const popularMovies = useSelector(state => state.popular); 

    const handleDrop = () => {
        setList((prevState) => ! prevState)
      };
    
      const handleCheckedOne = () => {
        setCheckOne((prevState) => ! prevState);
        setList((prevState) => ! prevState)
        if(checkTwo)setCheckTwo(false)
      };
    
      const handleCheckedTwo = () => {
        setCheckTwo((prevState) => ! prevState);
        setList((prevState) => ! prevState)
        if(checkOne)setCheckOne(false);
      };


  return (
    <div className='gral_cont'>
                <div className='view_container'>
                    <h4 className='view'>VER: </h4>
                    {
                    checkTwo ? <h4 className='view' onClick={handleDrop} ><strong>MIS PELÍCULAS</strong></h4> :
                            <h4 className='view' onClick={handleDrop}><strong>POPULARES</strong></h4>
                    }
                    <img src={ARROW} alt="desplegar" width='11px' onClick={handleDrop}  />
                  </div>

                  <div className={list ? 'see_container' : 'see_container see_container_close'}>
                      <div className="select_item">
                          <li className={checkOne ? 'see_container_li see_container_li_checked' : 'see_container_li '} onClick={handleCheckedOne}>POPULARES</li>
                          <img className={checkOne ? 'checked_1' : 'checked_1 checked_1_close'} src={CHECK} alt="SELECCIONADO" width='12px' />
                      </div>

                      <div className="select_item">
                          <li className={checkTwo ? 'see_container_li see_container_li_checked' : 'see_container_li '} onClick={handleCheckedTwo}>MIS PELÍCULAS</li>
                          <img src={CHECK} alt="SELECCIONADO" width='12px' className={checkTwo ? 'checked_2 ' : 'checked_2 checked_2_close'}/>
                      </div>
                </div>
                {           
                checkOne ? popularMovies?.map((movie) => {
                return (
                <div key={movie.id} className='card_items'>
                    <Card className='card_container' title={movie.title} image={imageUrl + movie.backdrop_path} rating={movie.vote_average} year={movie.release_date}/>
                </div>
            ) 
            }) : <Uploads />}
            
    </div>
  )
}

export default Cards;