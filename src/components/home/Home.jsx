import React from 'react'
import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Card from '../card/Card';
import Menu from '../menu/Menu';
import Uploads from '../uploads/Uploads';
import CHECK from '../../assets/images/check.svg';
import ARROW from '../../assets/images/arrow.svg';
import { getFeatured, getPopular } from '../../actions';
import Backdrop from '../backdrop/Backdrop';
import BackdropModal from '../backdrop/BackdropModal';
import Form from '../form/Form';



const Home = () => {

  const imageUrl = 'https://image.tmdb.org/t/p/w500';
  const dispatch = useDispatch();
  const popularMovies = useSelector(state => state.popular); 
  const featuredMovies = useSelector(state => state.featured);

  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false)
  const [list, setList] = useState(false);
  const [checkOne, setCheckOne] = useState(true);
  const [checkTwo, setCheckTwo] = useState(false);


  const toggleModal = () => {
    setModal((prevState) => !prevState)
  }

  const toggleRefresh= ()=> {
    setModal((prevState) => ! prevState)
    window.location.reload();
  }

  const toggleSideBar = ()=> {
    setSidebar((prevState) => ! prevState)
  }

  const handleDrop = () => {
    setList((prevState) => ! prevState)
  }

  const handleCheckedOne = () => {
    setCheckOne((prevState) => ! prevState);
    setList((prevState) => ! prevState)
    if(checkTwo)setCheckTwo(false)
  }

  const handleCheckedTwo = () => {
    setCheckTwo((prevState) => ! prevState);
    setList((prevState) => ! prevState)
    if(checkOne)setCheckOne(false)
  }

  useEffect(() => {
    dispatch(getFeatured());
  },[dispatch]);

  useEffect(() => {
    dispatch(getPopular());
  },[dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  
  return (
    <div>
      <div className='best_container'>
              {/* Formulario carga de película*/}
             
                <Form modal={modal} closeModal={toggleModal} closeAndRefresh={toggleRefresh}/> 
              

              {/* Menú lateral*/}
              <Menu sidebar={sidebar} closeSidebar={toggleSideBar} openModal={toggleModal}/> 

              {/* Fondo general caratula aleatoria */}
              <div className="degradee_container">
                <div className="degradee_mobile"></div>
              </div>
              <img className='bkg_image' src={featuredMovies.image} alt="caratula de la pelicula" />

              {/* Fondo en segundo plano*/}
              <Backdrop sidebar={sidebar} closeSidebar={toggleSideBar} modal={modal} closeModal={toggleModal}/> 
              <BackdropModal modal={modal} closeModal={toggleModal}/>  

              <div className="gral_container">

                {/* Barra de navegación */}
                <div className="top_container"><Navbar openSidebar={toggleSideBar} openModal={toggleModal}/></div>

                {/* Banner película reproduciendo.. */}
                <div className="center_container">
                  <Banner />  
                </div>
                
                {/* Cartas películas populares */}
                <div className="lateral_container">

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

            
            
            
      </div>
    </div>

       


    </div>
  )
}

export default Home
