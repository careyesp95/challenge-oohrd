import React, {useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from 'react-router';
import CardDetail from '../components/CardDetail/CardDetail.js';
import {getCountryDetail} from '../actions/index.js';
import Loading from '../components/Loading/Loading.js';




function DetailCountry() {
    const countryDetailById = useSelector(state => state.getCountryId)
    const dispatch = useDispatch()
    const {country} = useParams()
    useEffect(()=>{
        dispatch(getCountryDetail(country))
    },[dispatch,country])

    function currentValuePopulation(){
        let currentValue = countryDetailById.population
        let sortValueYear = countryDetailById.populationCounts.sort((a,b) => {
            if(a.year > b.year){
                return -1;
            }
            if(b.year > a.year){
                return 1;
            }
            return 0;
        })
        currentValue = sortValueYear[0]
        return currentValue;


    }

    return (
        <div className='container'>
            {
                countryDetailById === undefined ?(
                    <Loading /> 
                ) :(
                    <CardDetail
                    name={countryDetailById.country}
                    iso={countryDetailById.iso3}
                    population={currentValuePopulation()}

                    />
                )
            }
        </div>
    )
}

export default DetailCountry;