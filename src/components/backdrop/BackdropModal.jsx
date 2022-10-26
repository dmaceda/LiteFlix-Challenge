import React from 'react';
import './BackdropModal.css';

const BackdropModal = ({ modal, closeModal }) => {
  return (
    <div className={modal ? 'backdrop_modal backdrop_modal_open' : 'backdrop_modal'} onClick={closeModal}></div>
  )
}

export default BackdropModal