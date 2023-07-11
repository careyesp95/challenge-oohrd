import Navbar from '../components/Navbar/Navbar.js';
import React, { useState} from 'react';
import {useSelector} from 'react-redux';
import Card from '../components/Card/Card.js';
import Paginado from '../components/paginado/index.js';
import './Home.css';


function Home () {
    const stateCountryAll = useSelector(state => state.allCountries);

    const [currentPage,setCurrentPage] = useState(1);
    const [country,setCountry] = useState(14);
    const indexOfLastCountry = currentPage * country;
    const indexOfFirstCountry = indexOfLastCountry - country;
    const currentCountry = stateCountryAll.slice(indexOfFirstCountry,indexOfLastCountry)
    
    
    function paginado (pageNumber){
        setCurrentPage(pageNumber)
    }

    return (
        <main>
            <Navbar />
            <Paginado 
                countryPerPage={country}
                allCountry={stateCountryAll.length}
                paginado={paginado}
            />
            <div className='containerCard'>
                {
                    currentCountry.length > 0 ? currentCountry.map((e,i) => {
                        return (
                            <Card 
                                key={i}
                                country={e.name}
                                iso={e.iso3}
                                img={e.flag}
                            />
                        )
                    }): <h1>Loading...</h1>
                }
            </div>
        </main>
    )
}

export default Home;