import {
    GET_ALL_MEDICALS,
    GET_MEDICAL,
    ADD_MEDICAL,
    UPDATE_MEDICAL,
    DELETE_MEDICAL,
    SEARCH_MEDICAL,
    GET_MEDICALS_CITY
} from './medical.type'

const intialState = {
    medicals: [],
    selectedMedical: {}
}

const medicalReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_MEDICAL: return {
            ...state,
            selectedMedical: action.payload
        };
        case GET_ALL_MEDICALS: return {
            ...state,
            medicals: action.payload
        };
        case GET_MEDICAL: return {
            ...state,
            selectedMedical: [...action.payload]
        };
        case GET_MEDICALS_CITY: return {

            medicals: action.payload
        };
        case SEARCH_MEDICAL: return {

            medicals: action.payload
        };
        case UPDATE_MEDICAL: return {
            ...state,
            ...action.payload
        };
        case DELETE_MEDICAL: return {
            ...state,
            ...action.payload
        };
        default: return {
            ...state
        }
    }
}
export default medicalReducer