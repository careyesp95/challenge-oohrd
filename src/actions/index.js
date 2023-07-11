import {
    GET_COUNTRY_ALL,
    GET_COUNTRY_NAME,
    GET_COUNTRY_DETAIL,
    CLEAR_ALL

} from './actionName.js';


export const getCountryAll = function(){
    return function(dispatch){
        return fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: GET_COUNTRY_ALL,
                payload:response.data,
            })
        })
        .catch(err => console.log(err))
    }
}


export const getCountryDetail = function(country){
    return function(dispatch){
        return fetch('https://countriesnow.space/api/v0.1/countries/population')
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: GET_COUNTRY_DETAIL,
                payload:{
                    data:response.data,
                    country:country
                }
            })
        })
        .catch(err => console.log(err))
    }
}


export const clearAll = function() {
    return {
        type:CLEAR_ALL,
    }

}