import { GET_ALL_MEDICINES, GET_MEDICINE, SEARCH_MEDICINE, ADD_MEDICINE, SEARCH_CATEGORY_MEDICINE } from "./medicine.type";
const intialState = {
    medicinelist: [],
    medicine: {}
}

const medicineReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_MEDICINE: return {
            ...state,
            medicine: action.payload
        };
        case GET_ALL_MEDICINES:
            return {
                ...state,
                medicinelist: [...action.payload]
            };
        case GET_MEDICINE: return {
            ...state,
            medicine: action.payload
        };
        case SEARCH_MEDICINE: return {
            medicinelist: action.payload
        };
        case SEARCH_CATEGORY_MEDICINE: return {
            medicinelist: action.payload
        };
        default: return {
            ...state
        }
    }
}

export default medicineReducer