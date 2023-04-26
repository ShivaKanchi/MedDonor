import { ADD_REQUEST, GET_REQUESTS } from "./request.type"
const intialState = {
    requestlist: [],
    request: {}
}

const requestReducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_REQUEST: return {
            ...state,
            request: action.payload
        };
        case GET_REQUESTS:
            return {
                ...state,
                requestlist: [...action.payload]
            };
        default: return {
            ...state
        }
    }
}

export default requestReducer