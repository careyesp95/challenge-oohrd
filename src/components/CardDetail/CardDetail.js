import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import React, { useState} from 'react';
import Paises from '../Sugerencias/Paises.js';

import './CardDetail.css';

function CardDetail({name, iso, population}){
    const stateCountryAll = useSelector(state => state.allCountries);
    
    
    return(
        <main className ='wrap'>
            <h3 className='container-h3'>{name}</h3>
                <section className='container-section'>
                    <h2>Poblacion</h2>
                    <h3>({population.year}):{population.value}</h3>
                    <h3>ISO3:{iso}</h3>
                    <Paises data={stateCountryAll}/>
                    <Link to='/'>
                        <button className='button'>Limpiar</button>
                    </Link>
                </section>
                
        </main>
    )
}
export default CardDetail;