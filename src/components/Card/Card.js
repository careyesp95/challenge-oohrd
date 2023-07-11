import React from 'react';
import {Link} from 'react-router-dom';
import './Card.css';


function Card(props) {
    const {country,iso, img} = props;

    return (
            <main className='container-card'>
                <h1>{country}</h1>
                <div className='container-image'>
                    <Link to={`/home/detail/${country}`}>
                        <img src={img} alt={country} />
                    </Link>
                </div>
                <h1>ISO3:  {iso}</h1>
            </main>
    )
}


export default Card
