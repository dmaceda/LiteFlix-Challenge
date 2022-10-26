import React, { useState } from 'react';
import './Form.css';
import CLIP from '../../assets/images/clip.svg';
import CLOSE from '../../assets/images/close.svg';
import LOGO from '../../assets/images/logo.svg';

const Form = ({ modal, closeModal, closeAndRefresh }) => {

    const [inputName, setInputName] = useState('');
    const [inputNameAux, setInputNameAux] = useState('');
    const [inputImage, setInputImage] = useState(null);
    const [inputImageAux, setInputImageAux] = useState(null);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleTextChange = (e) => {
        let text = e.target.value
        setInputName(text)
        setInputNameAux(text);
    }

    const saveData = () => {
        localStorage.setItem('name', inputName);
        saveImage();
        setSuccess(true);
    }

    const saveImage = () => {
        localStorage.setItem('image', inputImage);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
       
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    //Cargar imagenes arrastrandolas
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        setInputImageAux(files);
        const reader = new FileReader()
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            e.preventDefault()
            //obtengo el progreso de carga
            setProgress(Math.round((e.loaded * 100) / e.total));
            //valido si hay errores de carga
            reader.onerror = () => setError(true);
            e.preventDefault()
            setInputImage(e.target.result)
        }  
    }

    // Cargar imagenes manualmente
    const handleChangeImage = (e) => {
        setInputImageAux(e.target.files[0]);
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
            setProgress(Math.round((e.loaded * 100) / e.total));
            reader.onerror = () => setError(true);
            e.preventDefault()
            setInputImage(e.target.result)
        }
    }
    
  return (
 
    <div className={modal ? 'form form_open' : 'form'}>
                <div className="form_container"
                onDragOver={dragOver}
                onDragEnter={dragEnter}
                onDragLeave={dragLeave}
                onDrop={fileDrop}
                > 
                <div className="close_form_container">
                    <img src={CLOSE} alt="cerrar formulario" width='20px' onClick={closeModal}/>
                </div>  

                {/* Area de título || Logotipo */}
                {   success ? <img id='logo_form'src={LOGO} alt='logo' width='113px'/> : 
                    <h2 className='form_title'>AGREGAR PELÍCULA</h2> }
                
                
                {/* Area de carga de archivos*/}
                {   !inputImageAux && 
                    <div className="drop_area" >
                        <img src={CLIP} alt="agregar archivo" width='16px'/>
                        <label id='label' htmlFor="agregar" >AGREGA UN ARCHIVO</label>
                        <h2>ARRASTRALO Y SOLTALO AQUÍ</h2>
                        <input type="file" multiple accept='image/*' id='agregar' onChange={handleChangeImage }/>
                    </div> 
                }

                {/* Pantalla final de informacion de pelicula cargada correctamente */}
                {   success &&
                    <div className="success_info">
                        <h2 id='success_congrats'>¡FELICITACIONES!</h2>
                        <h2 id='success_name'>{inputName} FUE CORRECTAMENTE SUBIDA.</h2>
                    </div>
                }
                

                {/* Barra de progreso de carga de archivo */}
                {   inputImageAux && !success ?
                    <div className="progress_bar">
                        <div className="porcent_progress">
                            {
                            !error ?  <div className='progress_container'> <h2 id='porcent'>{progress}%</h2><h2 id='load'>CARGADO</h2></div> : 
                            <div className='porcent_container'> <h2 id='porcent'>¡ERROR!</h2><h2 id='load'>NO SE PUDO CARGAR LA PELÍCULA</h2></div> 
                            }
                        
                        </div>

                        <div className="progress_area">
                            {progress && !error ? <div className="progress"></div> : null }
                            { error ? <div className="progress_error"></div> : null  }
                        </div>

                        <div className="drop_status">
                            { inputImage && !error ? <h2 ID='load_ok'>¡LISTO!</h2> : <h2>CANCELAR</h2> }
                            { error && <h2>REINTENTAR</h2> }
                        </div> 
                    </div> : null
                }

                {/* Input de carga de nombre de película */}
                {   !success &&
                    <input type="text" 
                    id='input_name'
                    placeholder='TÍTULO'
                    onChange={ handleTextChange } />
                }
                
                {/* Boton de carga de película || regreso a Home*/}
                {   success ? <button type='button' onClick={closeAndRefresh} className='form_btn'>IR AL HOME</button> :
                    <button type='button' onClick={ saveData } className={inputImageAux && inputNameAux ? 'form_btn' : 'form_btn_disabled'}
                    disabled={!inputImageAux && !inputNameAux }>SUBIR PELÍCULA</button>
                }
                                
            </div>
    </div>
  )
}

export default Form