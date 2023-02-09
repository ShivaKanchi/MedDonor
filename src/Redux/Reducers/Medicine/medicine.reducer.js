import { GET_MEDICINES, GET_MEDICINE } from "./medicine.type";

const intialState = {
    Medicines: [],
    Medicine: {}
}

const medicineReducer = (state = intialState, action) => {
    switch (action) {
        case GET_MEDICINES: return {
            ...state,
            medicines: [...action.payload]
        };
        case GET_MEDICINE: return {
            ...state,
            medicine: action.payload
        };
        default: return {
            ...state
        }
    }
}

export default medicineReducer