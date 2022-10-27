import React from 'react';
import './Menu.css';
import CLOSE from '../../assets/images/close.svg';
import PLUS from '../../assets/images/plus.svg';
import LOGO from '../../assets/images/logo.svg';
import AVATAR from '../../assets/images/avatar.svg';
import NOTIFICATION from '../../assets/images/notification.svg';


const Menu = ({ sidebar,closeSidebar, openModal }) => {
  return (
        <div className={sidebar ? 'sidebar sidebar_open' : 'sidebar'}>

        <div className="navbar_menu_xs">
            <img className='close_xs'  src={CLOSE} alt='cerrar menu' width='18px' onClick={closeSidebar}/>
            <img className='logo_xs' src={LOGO} alt='logo' width='113px'/>
            <img className='avatar_xs' src={AVATAR} alt='mi cuenta' width='40px'/> 
          </div>
            <div className="navbar_menu">
                <div className="menu_left">
                    <img className='close'  src={CLOSE} alt='cerrar menu' width='18px' onClick={closeSidebar}/>
                </div>
                <div className="menu_right">
                    <img className='notification'  src={NOTIFICATION} alt='notificaciones' width='26px'/>
                    <img className='avatar_menu' src={AVATAR} alt='mi cuenta' width='40px'/> 
                </div>
            </div>

            <div className="list">    
                <li>INICIO</li>
                <li>SERIES</li>
                <li>PELÍCULAS</li>
                <li>AGREGADAS RECIENTEMENTE</li>
                <li>POPULARES</li>
                <li>MIS PELÍCULAS</li>
                <li>MI LISTA</li>
                <li className='add_movie_menu' onClick={openModal}>
                    <img className='plus_menu' src={PLUS} alt='agregar película' />
                    AGREGAR PELÍCULA
                </li>
                <li>CERRAR SESÍON</li>
            </div>
        </div>
  )
}

export default Menu;
