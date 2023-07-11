import React from 'react';
import './paginado.css';


function Paginado({paginado, countryPerPage,allCountry}) {
    const pageNumber = [];
    for(let i = 1; i <= Math.ceil(allCountry/countryPerPage); i++){
        pageNumber.push(i)
    }
    return (
        <nav className='nav-paginado'>
            <main className='container-page'>
                {
                    pageNumber && pageNumber.map(elem => {
                        return (
                            <div key={elem}> 
                            <button className='container__btn' onClick={() => paginado(elem)}>{elem}</button>
                            </div>
                        )
                    })
                }
            </main>
        </nav>
    )
}

export default Paginado