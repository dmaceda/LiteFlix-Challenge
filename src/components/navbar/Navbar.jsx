import React from 'react';
import './Navbar.css';
import LOGO from '../../assets/images/logo.svg';
import AVATAR from '../../assets/images/avatar.svg';
import NOTIFICATION from '../../assets/images/notification.svg';
import MENU from '../../assets/images/menu.svg';
import PLUS from '../../assets/images/plus.svg';


const Navbar = ({openSidebar, openModal}) => {
  return (
    <nav>
          <div className="navbar_xl">
              {/* Navbar lado izquierdo*/}
              <div className="navbar_left">
                  <img className='logo' src={LOGO} alt='logo' width='113px'/>
                  <div className='add_movie_container'>
                      <button className='add_movie' onClick={openModal}>
                        <img className='plus' src={PLUS} alt='agregar película' />
                        AGREGAR PELÍCULA
                      </button>
                  </div>
              </div>

              {/* Navbar lado derecho*/}
              <div className="navbar_right">
                  <img className='menu'  src={MENU} alt='menú' width='27px' onClick={openSidebar}/> 
                  <img className='notification'  src={NOTIFICATION} alt='notificaciones' width='26px'/>
                  <img className='avatar' src={AVATAR} alt='mi cuenta' width='40px'/> 
              </div>
          </div>

          <div className="navbar_xs">
            <img className='menu_xs'  src={MENU} alt='menú' width='27px' onClick={openSidebar}/> 
            <img className='logo_xs' src={LOGO} alt='logo' width='113px'/>
            <img className='avatar' src={AVATAR} alt='mi cuenta' width='40px'/> 
          </div>
    </nav>
  )
}

export default Navbar;
