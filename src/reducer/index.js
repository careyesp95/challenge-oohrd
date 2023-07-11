import {
    GET_COUNTRY_ALL,
    GET_COUNTRY_NAME,
    GET_COUNTRY_DETAIL,
    CLEAR_ALL
} from '../actions/actionName.js';

const initialState = {
    allCountries :[],
    allCountriesAux:[],
    getCountryId:undefined,
}

function reducer(state=initialState,action) {
    switch(action.type){
        case GET_COUNTRY_ALL:
            return {
                ...state,
                allCountries:action.payload,
                allCountriesAux:action.payload,
                
            };
        case GET_COUNTRY_DETAIL:
            const country = action.payload.country
            const data = action.payload.data
            let countryDetail = data.find(e => e.country === country)
            return {
                ...state,
                getCountryId:countryDetail
            }

        case CLEAR_ALL:
            return{
                ...state,
                allCountries:[...state.allCountriesAux]
            }
            
        default:
            return state;
    }
}

export default reducer
