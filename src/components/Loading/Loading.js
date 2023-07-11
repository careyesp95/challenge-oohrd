import React from 'react';
import {Link} from 'react-router-dom';
import'./Loading.css';

function Loading() {
    return (
        <div className='container-loading'>
            <h1 className='container-h1'>Cargando....</h1>
            <Link to='/'>
                <button className='button'>Regresar</button>
            </Link>
        </div>
    )
}

export default Loading