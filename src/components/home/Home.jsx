import React from 'react'
import {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Home.css';
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import Menu from '../menu/Menu';
import { getFeatured, getPopular } from '../../actions';
import Backdrop from '../backdrop/Backdrop';
import BackdropModal from '../backdrop/BackdropModal';
import Form from '../form/Form';
import Cards from '../cards/Cards';



const Home = () => {

  const dispatch = useDispatch();
  const featuredMovies = useSelector(state => state.featured);
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);
 


  const toggleModal = () => {
    setModal((prevState) => !prevState)
  };

  const toggleRefresh= ()=> {
    setModal((prevState) => ! prevState)
    window.location.reload();
  };

  const toggleSideBar = ()=> {
    setSidebar((prevState) => ! prevState)
  };

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
                    <div className="top_container">
                      <Navbar openSidebar={toggleSideBar} openModal={toggleModal}/>
                    </div>

                    {/* Banner película reproduciendo.. */}
                    <div className="center_container">
                      <Banner featuredMovies={featuredMovies}/>  
                    </div>
                
                    {/* Cartas películas populares */}
                    <div className="lateral_container">
                      <Cards />
                    </div>          
              </div>
        </div>
    </div>
  )
}

export default Home;
