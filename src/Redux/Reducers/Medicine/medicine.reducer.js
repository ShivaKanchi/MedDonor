import { GET_MEDICINES, GET_MEDICINE } from "./medicine.type";

const intialState = {
    medicines: [],
    medicine: {}
}

const medicineReducer = (state = intialState, action) => {
    switch (action) {
        case GET_MEDICINES:
            console.log("reducer med", action.payload)
            return {
                ...state,
                medicines: [...action.payload.Medicines]
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